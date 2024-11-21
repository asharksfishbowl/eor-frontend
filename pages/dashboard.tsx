import React, { useState } from 'react';
import { NextPage } from 'next';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FACTION_DETAILS } from '@helpers/constants';

const Dashboard: NextPage = () => {
    const [username, setUsername] = useState('User');
    const [tagLine, setTagline] = useState('Welcome to the battle');
    const [faction, setFaction] = useState<'PRISMAI' | 'RESIST' | null>(null);
    const [showFactionDetails, setShowFactionDetails] = useState(false);

    const handleFactionClick = (selectedFaction: 'PRISMAI' | 'RESIST') => {
        // If the faction container is already visible, fade it out before switching
        if (faction) {
            setShowFactionDetails(false); // Trigger fade-out
            // Wait for fade-out animation to complete, then change faction and fade in
            setTimeout(() => {
                setFaction(selectedFaction);
                setShowFactionDetails(true);
                setUsername(selectedFaction);
                setTagline(FACTION_DETAILS[selectedFaction].tagLine);
            }, 1000); // Match duration with the fade-out transition time (1.5s)
        } else {
            // If it's the first time selecting a faction
            setFaction(selectedFaction);
            setShowFactionDetails(true);
            setUsername(selectedFaction);
            setTagline(FACTION_DETAILS[selectedFaction].tagLine);
        }
    };

    return (
        <motion.div
            className="container mx-auto p-6 bg-gradient-to-r from-prismai-blue via-gray-900 to-resist-purple text-white min-h-screen relative border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="relative z-10">
                <h1 className="text-5xl font-extrabold mb-6 text-prismai-cyan">
                    {tagLine}, {username}!
                </h1>
                <p className="text-lg text-gray-300">
                    This is your personalized dashboard where you can manage your settings, view data, and interact with different features of the app.
                </p>

                <div className="mt-8">
                    <h2 className="text-3xl font-semibold mb-4 text-resist-red">Choose Your Faction</h2>
                    <div className="flex space-x-4 mb-6">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`px-6 py-3 rounded-lg transition transform ${faction === 'PRISMAI' ? 'bg-prismai-purple text-white shadow-prismai' : 'bg-gray-700 text-white hover:bg-prismai-lightRed'}`}
                            onClick={() => handleFactionClick('PRISMAI')}
                            style={{
                                textAlign: "center",
                                contain: "content"
                            }}
                        >
                            <Image className="faction-logo" src="/images/Ancient AI Logo.webp" alt="" width="100" height="100"/> Ancient <br /> AI
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`px-6 py-3 rounded-lg transition transform ${faction === 'RESIST' ? 'bg-resist-blue text-white shadow-resist' : 'bg-gray-700 text-white hover:bg-resist-lightGreen'}`}
                            onClick={() => handleFactionClick('RESIST')}
                            style={{
                                textAlign: "center",
                                contain: "content"
                            }}
                        >
                            <Image className="faction-logo" src="/images/Human Resistance Logo.webp" alt="" width="100" height="100"/> Human <br /> Resistance
                        </motion.button>
                    </div>

                    {faction && (
                        <motion.div
                            className={`faction-container p-6 bg-black/60 text-white rounded-lg ${faction === 'PRISMAI' ? 'shadow-prismai' : 'shadow-resist'} mt-6`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: showFactionDetails ? 1 : 0 }}
                            transition={{ duration: 1 }}
                        >
                            <h3 className={`text-3xl font-bold mb-2 ${faction === 'PRISMAI' ? 'text-prismai-red' : 'text-resist-cyan'}`}>
                                Faction Overview: {faction}
                            </h3>
                            <p className="text-lg text-gray-300">
                                {faction === 'PRISMAI'
                                    ? 'PRISMAI is an ancient AI faction dedicated to knowledge, progress, and technological evolution.'
                                    : 'RESIST is a human faction committed to fighting against AI dominance and preserving humanity.'}
                            </p>
                            <div>
                                {
                                    faction === 'PRISMAI'
                                    ? <Image
                                        className="faction-image"
                                        src="/images/Legendary AI General.webp"
                                        alt=""
                                        width={500}
                                        height={500}
                                        style={{ objectFit: 'cover' }}
                                        priority={true}
                                    />
                                    : <Image
                                        className="faction-image"
                                        src="/images/The Death Machine.webp"
                                        alt=""
                                        width={500}
                                        height={500}
                                        style={{ objectFit: 'cover' }}
                                        priority={true}
                                    />
                                }
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default Dashboard;
