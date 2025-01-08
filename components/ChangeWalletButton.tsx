import React from 'react';

interface ChangeWalletButtonProps {
    disconnect: () => void;
}

const ChangeWalletButton: React.FC<ChangeWalletButtonProps> = ({ disconnect }) => {
    return (
        <button
            onClick={disconnect}
            style={{
                backgroundColor: '#FF5722',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
        >
            Change Wallet
        </button>
    );
};

export default ChangeWalletButton;
