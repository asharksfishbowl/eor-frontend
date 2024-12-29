// pages/roadmap.tsx
import { NextPage, GetServerSideProps } from 'next';
import { motion } from 'framer-motion';
import { COLOR_GRADIENTS } from "@helpers/constants";

interface RoadmapItem {
    quarter: string;
    goal: string;
    complete: number; // 0..100
}

interface RoadmapPageProps {
    roadmap: RoadmapItem[];
}

const Roadmap: NextPage<RoadmapPageProps> = ({ roadmap }) => {
    // Group items by quarter
    const groupedRoadmap = roadmap.reduce<Record<string, RoadmapItem[]>>((acc, item) => {
        if (!acc[item.quarter]) {
            acc[item.quarter] = [];
        }
        acc[item.quarter].push(item);
        return acc;
    }, {});

    return (
        <motion.div
            className="grid gap-8"
            initial={{ opacity: 1}}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
        >
            {Object.entries(groupedRoadmap).map(([quarter, items], quarterIndex) => (
                <div
                    key={quarterIndex}
                    className="p-6 border rounded-lg bg-gradient-to-r from-gray-800 to-gray-900
                     hover:scale-105 transition-transform"
                >
                    <h3 className="text-2xl font-bold mb-4">{quarter}</h3>

                    {items.map((g, goalIndex) => {
                        const gradientClass = COLOR_GRADIENTS[goalIndex % COLOR_GRADIENTS.length];
                        return (
                            <div key={goalIndex} className="flex items-center justify-between mb-3">
                                <p className="text-lg flex-1 pr-4">{g.goal}</p>

                                {/* Progress + Label */}
                                <div className="flex items-center space-x-2 w-2/3">
                                    <div className={`relative flex-1 h-8 bg-gray-800 rounded overflow-hidden`}>
                                        <div
                                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${gradientClass} transition-all duration-300`}
                                            style={{ width: `${g.complete}%` }}
                                        />
                                    </div>
                                    <span className="text-sm text-gray-200">{g.complete}%</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ))}
        </motion.div>
    );
};

// Example SSR
export const getServerSideProps: GetServerSideProps<RoadmapPageProps> = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
    const res = await fetch(`${baseUrl}/roadmap`);
    if (!res.ok) {
        console.error('Failed to fetch roadmap data');
        return { props: { roadmap: [] } };
    }

    const data: RoadmapItem[] = await res.json();
    return { props: { roadmap: data } };
};

export default Roadmap;
