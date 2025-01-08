import React from 'react';

interface SelectWalletButtonProps {
    onSelectAndConnect: () => void;
}

const SelectWalletButton: React.FC<SelectWalletButtonProps> = ({ onSelectAndConnect }) => {
    return (
        <button
            onClick={onSelectAndConnect}
            style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '5px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
        >
            Select Wallet
        </button>
    );
};

export default SelectWalletButton;
