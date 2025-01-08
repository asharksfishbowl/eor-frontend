import React from 'react';
import { WalletAdapter, WalletName } from '@solana/wallet-adapter-base';
import Image from 'next/image';

interface WalletSelectionDialogProps {
    wallets: { adapter: WalletAdapter }[];
    onWalletSelect: (walletName: WalletName) => void;
    onClose: () => void;
}

const WalletSelectionDialog: React.FC<WalletSelectionDialogProps> = ({
     wallets,
     onWalletSelect,
     onClose,
 }) => {
    return (
        <div
            style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
            }}
        >
            <div
                style={{
                    backgroundColor: 'black',
                    borderRadius: '10px',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    width: '30%',
                }}
            >
                <h2>Select a Wallet</h2>
                <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
                    {wallets.map(({ adapter }) => (
                        <button
                            key={adapter.name}
                            onClick={() => onWalletSelect(adapter.name)}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            <Image
                                src={`/images/${adapter.name.toLowerCase()}.png`}
                                alt={adapter.name}
                                style={{ width: '90%', height: '90px', marginBottom: '10px' }}
                                height={90}
                                width={90}
                            />
                            {adapter.name}
                        </button>
                    ))}
                </div>
                <button
                    onClick={onClose}
                    style={{
                        marginTop: '20px',
                        backgroundColor: '#FF5722',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default WalletSelectionDialog;
