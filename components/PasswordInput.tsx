import React, { useState } from 'react';

interface PasswordInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="relative">
            <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={value}
                onChange={onChange}
                className="p-3 rounded bg-gray-900 text-white border border-gray-700 w-full"
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
            >
                {showPassword ? "Hide" : "Show"}
            </button>
        </div>
    );
};

export default PasswordInput;

