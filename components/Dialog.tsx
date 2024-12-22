import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    type?: 'success' | 'error' | 'info'; // Define dialog types
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, message, type = 'info' }) => {
    const [image, setImage] = useState<string>('');

    useEffect(() => {
        if (isOpen) {
            // Randomly select an image from the dialog-images folder
            const images = [
                '/images/Ancient AI Logo.webp',
                '/images/HumanLogo.webp',
            ];
            setImage(images[Math.floor(Math.random() * images.length)]);

            const timer = setTimeout(onClose, 3000); // Auto close after 3 seconds
            return () => clearTimeout(timer); // Cleanup timer on component unmount or dialog close
        }
    }, [isOpen, onClose]);

    const typeColors = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500',
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <motion.div
                        className="p-6 bg-gray-800 rounded-lg max-w-lg w-full"
                        initial={{ opacity: 0, scale: 0.8 }} // Fade in and scale up
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }} // Fade out and scale down
                        transition={{ duration: 0.3 }} // Animation duration
                    >
                        {/* Title */}
                        <div className={`p-2 text-center rounded-t-lg ${typeColors[type]}`}>
                            <h2 className="text-xl font-bold text-white">{title}</h2>
                        </div>

                        {/* Two-Column Layout */}
                        <div className="flex mt-4">
                            {/* Left Column: Image */}
                            <div className="flex-shrink-0 w-1/3 flex items-center justify-center">
                                {image && (
                                    <img
                                        src={image}
                                        alt="Dialog Illustration"
                                        className="w-34 h-34 object-contain"
                                    />
                                )}
                            </div>

                            {/* Right Column: Message */}
                            <div className="w-2/3 pl-4">
                                <p className="text-white crazy-message">{message}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Dialog;
