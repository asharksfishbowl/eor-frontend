import React, { useState } from 'react';
import { useWalletContext } from '../context/WalletContext';

const WalletBalanceDisplay: React.FC = () => {
    const { getAllBalances } = useWalletContext();
    const [balances, setBalances] = useState<{ SOL: number; AI: number; HUMAN: number } | null>(null);

    const fetchBalances = async () => {
        const publicKey = 'YourPublicKeyHere'; // Replace with the actual public key
        const fetchedBalances = await getAllBalances(publicKey);
        setBalances(fetchedBalances);
    };

    return (
        <div>
            <button onClick={fetchBalances}>Fetch Balances</button>
            {balances && (
                <div>
                    <p>SOL: {balances.SOL}</p>
                    <p>AI: {balances.AI}</p>
                    <p>HUMAN: {balances.HUMAN}</p>
                </div>
            )}
        </div>
    );
};

export default WalletBalanceDisplay;
