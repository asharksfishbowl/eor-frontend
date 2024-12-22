import { NextPage } from 'next';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Dialog from '../components/Dialog'; // Import the Dialog component

const SignUp: NextPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isLoading, setIsLoading] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogTitle, setDialogTitle] = useState('');
    const [dialogMessage, setDialogMessage] = useState('');
    const [dialogType, setDialogType] = useState<'success' | 'error'>('success');

    const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!isEmailValid(email)) newErrors.email = 'Invalid email format';
        if (password.length < 8) newErrors.password = 'Password must be at least 8 characters long';
        if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (!response.ok || data.status === 'error') {
                throw new Error(data.message || 'An error occurred');
            }

            // Success Dialog
            setDialogTitle('Success');
            setDialogMessage('Account created successfully!');
            setDialogType('success');
            setIsDialogOpen(true);

            // Reset form fields
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setErrors({});
        } catch (error: any) {
            // Error Dialog
            setDialogTitle('Error');
            setDialogMessage(error.message || 'An unexpected error occurred');
            setDialogType('error');
            setIsDialogOpen(true);
        } finally {
            setIsLoading(false);
        }
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
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full max-w-full p-3 rounded bg-gray-900 text-white border ${
                            errors.email ? 'border-red-500' : 'border-gray-700'
                        }`}
                        aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full max-w-full p-3 rounded bg-gray-900 text-white border ${
                            errors.password ? 'border-red-500' : 'border-gray-700'
                        }`}
                        aria-invalid={!!errors.password}
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`w-full max-w-full p-3 rounded bg-gray-900 text-white border ${
                            errors.confirmPassword ? 'border-red-500' : 'border-gray-700'
                        }`}
                        aria-invalid={!!errors.confirmPassword}
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full px-6 py-3 bg-resist-lightGreen text-black rounded-lg hover:bg-resist-cyan transition"
                    disabled={isLoading}
                >
                    {isLoading ? 'Submitting...' : 'Sign Up'}
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

export default SignUp;
