import { NextPage } from 'next';
import { motion } from 'framer-motion';

const Roadmap: NextPage = () => {
    const roadmap = [
        { quarter: 'Q1 2025', goal: 'Launch PRISMAI Integration' },
        { quarter: 'Q2 2025', goal: 'Introduce RESIST Tokenomics' },
        { quarter: 'Q3 2025', goal: 'Card Game Prototype Release' },
        { quarter: 'Q4 2025', goal: 'Full Platform Launch' },
    ];

    return (
        <motion.div
            className="grid gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {roadmap.map((item, index) => (
                <div key={index} className="p-6 border rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:scale-105 transition-transform">
                    <h3 className="text-2xl font-bold mb-2">{item.quarter}</h3>
                    <p className="text-lg">{item.goal}</p>
                </div>
            ))}
        </motion.div>
    );
};

export default Roadmap;
