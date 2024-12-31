import { NextPage } from 'next';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About: NextPage = () => {
    return (
        <motion.div
            className="p-6 bg-gradient-to-r from-gray-800 to-black rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-gray-300">
                EoR is an interactive platform focused on the struggle between the PRISMAI faction, an ancient AI entity,
                and the RESIST faction, determined to fight against AI dominance. Our mission is to create an engaging
                experience where users can align with their preferred faction and actively shape the future through
                investment, games, and lore.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                    <Image src="/images/shark.webp" alt="Person 1" className="w-32 h-32 rounded-full mb-4 content" width="100" height="100"/>
                    <h3 className="text-xl font-bold">Nick Marino</h3>
                    <p className="text-gray-400">Founder & Architech</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/images/miguel.webp" alt="Person 2" className="w-32 h-32 rounded-full mb-4 content" width="100" height="100"/>
                    <h3 className="text-xl font-bold">Position Available</h3>
                    <p className="text-gray-400">Founder & Project Manager</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/images/sara.webp" alt="Person 3" className="w-32 h-32 rounded-full mb-4 content" width="100" height="100"/>
                    <h3 className="text-xl font-bold">Position Available</h3>
                    <p className="text-gray-400">Founder & Marketing Director</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/images/steve.webp" alt="Person 1" className="w-32 h-32 rounded-full mb-4 content" width="100" height="100"/>
                    <h3 className="text-xl font-bold">Position Available</h3>
                    <p className="text-gray-400">Creative Director</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/images/jane.webp" alt="Person 2" className="w-32 h-32 rounded-full mb-4 content" width="100" height="100"/>
                    <h3 className="text-xl font-bold">Position Available</h3>
                    <p className="text-gray-400">Lead Developer</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/images/emily.webp" alt="Person 3" className="w-32 h-32 rounded-full mb-4 content" width="100" height="100"/>
                    <h3 className="text-xl font-bold">Position Available</h3>
                    <p className="text-gray-400">Quality Assurance Director</p>
                </div>
            </div>
        </motion.div>
    );
};

export default About;
