import { NextPage } from 'next';
import { useState } from 'react';
import { motion } from 'framer-motion';

const SignIn: NextPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle sign-in logic here
        console.log({ email, password });
    };

    return (
        <motion.div
            className="p-6 bg-gradient-to-r from-gray-800 to-black rounded-lg max-w-md mx-auto content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1 className="text-4xl font-bold mb-4">Sign In</h1>
            <form onSubmit={handleSubmit} className="grid gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 rounded bg-gray-900 text-white border border-gray-700"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-3 rounded bg-gray-900 text-white border border-gray-700"
                />
                <button type="submit" className="px-6 py-3 bg-prismai-red text-black rounded-lg hover:bg-prismai-lightRed transition">
                    Sign In
                </button>
            </form>
        </motion.div>
    );
};

export default SignIn;