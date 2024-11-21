import { NextPage } from 'next';
import { useState } from 'react';
import { motion } from 'framer-motion';

const SignUp: NextPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Handle sign-up logic here, e.g., send data to backend
        console.log({ username, email, password });
    };

    return (
        <motion.div
            className="p-6 bg-gradient-to-r from-gray-800 to-black rounded-lg max-w-md mx-auto content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1 className="text-4xl font-bold mb-4">Create an Account</h1>
            <form onSubmit={handleSubmit} className="grid gap-4">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="p-3 rounded bg-gray-900 text-white border border-gray-700"
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 rounded bg-gray-900 text-white border border-gray-700"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-3 rounded bg-gray-900 text-white border border-gray-700"
                    required
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="p-3 rounded bg-gray-900 text-white border border-gray-700"
                    required
                />
                <button type="submit" className="px-6 py-3 bg-resist-lightGreen text-black rounded-lg hover:bg-resist-cyan transition">
                    Sign Up
                </button>
            </form>
        </motion.div>
    );
};

export default SignUp;
