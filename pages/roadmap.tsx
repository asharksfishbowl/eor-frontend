import { NextPage, GetServerSideProps } from 'next';
import { motion } from 'framer-motion';
import { COLOR_GRADIENTS } from "@helpers/constants";

interface RoadmapItem {
    quarter: string;
    goal: string;
    complete: number;
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
            className="grid gap-8 px-4 sm:px-6 lg:px-8 py-6"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
        >
            {Object.entries(groupedRoadmap).map(([quarter, items], quarterIndex) => (
                <div
                    key={quarterIndex}
                    className="p-4 sm:p-6 border rounded-lg bg-gradient-to-r from-cyan-900 to-gray-900
                     hover:scale-105 transition-transform"
                >
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">{quarter}</h3>

                    {items.map((g, goalIndex) => {
                        const gradientClass = COLOR_GRADIENTS[goalIndex % COLOR_GRADIENTS.length];
                        return (
                            <div
                                key={goalIndex}
                                className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4"
                            >
                                <p className="text-sm sm:text-base flex-1 sm:pr-4 break-words">{g.goal}</p>

                                {/* Progress + Label */}
                                <div className="flex items-center space-x-2 w-full sm:w-2/3 mt-2 sm:mt-0">
                                    <div
                                        className="relative flex-1 h-4 sm:h-6 bg-gray-800 rounded overflow-hidden"
                                    >
                                        <div
                                            className={`absolute top-0 left-0 h-full bg-gradient-to-r ${gradientClass} transition-all duration-300`}
                                            style={{ width: `${g.complete}%` }}
                                        />
                                    </div>
                                    <span className="text-xs sm:text-sm text-gray-200">{g.complete}%</span>
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
