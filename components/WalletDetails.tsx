import React from 'react';

interface WalletDetailsProps {
    walletAddress: string | null;
}

const WalletDetails: React.FC<WalletDetailsProps> = ({ walletAddress }) => {
    return (
        <p style={{ marginTop: '10px', textAlign: 'center' }}>
            <strong>Connected Wallet:</strong> {walletAddress || 'Not Available'}
        </p>
    );
};

export default WalletDetails;
