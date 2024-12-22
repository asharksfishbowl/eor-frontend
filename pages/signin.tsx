import { NextPage } from 'next';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Dialog from '../components/Dialog'; // Import the Dialog component

const SignIn: NextPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogTitle, setDialogTitle] = useState('');
    const [dialogMessage, setDialogMessage] = useState('');
    const [dialogType, setDialogType] = useState<'success' | 'error' | 'info'>('info');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok || data.status === 'error') {
                throw new Error(data.message || 'Failed to sign in');
            }

            setDialogTitle('Success');
            setDialogMessage('You have signed in successfully!');
            setDialogType('success');
        } catch (err: any) {
            setDialogTitle('Error');
            setDialogMessage(err.message || 'An unexpected error occurred');
            setDialogType('error');
        } finally {
            setIsDialogOpen(true); // Open the dialog
        }
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
                    className="p-3 rounded bg-gray-900 text-white border border-gray-700 w-full"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-3 rounded bg-gray-900 text-white border border-gray-700 w-full"
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-prismai-red text-black rounded-lg hover:bg-prismai-lightRed transition"
                >
                    Sign In
                </button>
            </form>

            {/* Dialog Component */}
            <Dialog
                isOpen={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                title={dialogTitle}
                message={dialogMessage}
                type={dialogType}
            />
        </motion.div>
    );
};

export default SignIn;
