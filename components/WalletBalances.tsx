import React from 'react';

interface WalletBalancesProps {
    fetchBalance: () => Promise<void>; // Function to fetch balances
    balance: { SOL: number; AI: number; HUMAN: number } | null; // Balance data
}

const WalletBalances: React.FC<WalletBalancesProps> = ({ fetchBalance, balance }) => {
    return (
        <div>
            <button
                onClick={fetchBalance}
                style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Get Balances
            </button>
        </div>
    );
};

export default WalletBalances;
