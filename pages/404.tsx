import { NextPage } from 'next';
import { motion } from 'framer-motion';

const Custom404: NextPage = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
        >
            <h1 className="text-5xl font-bold mb-4">Server Maintenance</h1>
            <p className="text-lg mb-8">We’re currently performing some updates. Work in progress...</p>
            <div className="w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow"></div>
            <p className="mt-8 text-gray-400">
                Please check back later. Thank you for your patience!
            </p>
        </motion.div>
    );
};

export default Custom404;
