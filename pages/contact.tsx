import { NextPage } from 'next';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: NextPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log({ name, email, message });
    };

    return (
        <motion.div
            className="p-6 bg-gradient-to-r from-gray-800 to-black rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit} className="grid gap-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-3 rounded bg-gray-900 text-white border border-gray-700"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 rounded bg-gray-900 text-white border border-gray-700"
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="p-3 rounded bg-gray-900 text-white border border-gray-700"
                />
                <button type="submit" className="px-6 py-3 bg-prismai-purple text-white rounded-lg hover:bg-prismai-lightRed transition">
                    Send Message
                </button>
            </form>
        </motion.div>
    );
};

export default Contact;
