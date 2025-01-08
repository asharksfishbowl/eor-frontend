import React from 'react';

interface ChangeWalletButtonProps {
    disconnect: () => void;
}

const ChangeWalletButton: React.FC<ChangeWalletButtonProps> = ({ disconnect }) => {
    return (
        <button
            onClick={disconnect}
            style={{
                backgroundColor: '#ef8574',
                color: 'white',
                padding: '5px',
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
