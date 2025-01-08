import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletName } from '@solana/wallet-adapter-base'; // Correct import
import WalletSelectionDialog from './WalletSelectionDialog';
import ChangeWalletButton from './ChangeWalletButton';
import WalletDetails from './WalletDetails';
import WalletBalances from './WalletBalances';
import { getAllBalances } from "@helpers/solanaUtils";

const WalletConnector: React.FC = () => {
    const { publicKey, connected, connect, select, disconnect, wallets } = useWallet();
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const [balance, setBalance] = useState<{ SOL: number; AI: number; HUMAN: number } | null>(null);
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    useEffect(() => {
        if (publicKey) {
            setWalletAddress(publicKey.toString());
        } else {
            setWalletAddress(null);
        }
    }, [publicKey]);

    const handleWalletSelect = async (walletName: WalletName) => {
        try {
            if (!connected) {
                await connect()
            }
            else {
                select(walletName)
            }
            setDialogOpen(false);
        } catch (error) {
            console.error('Error connecting wallet:', error);
        }
    };

    const fetchBalance = async () => {
        if (walletAddress) {
            try {
                const fetchedBalance = await getAllBalances(walletAddress);
                setBalance(fetchedBalance);
            } catch (error) {
                console.error('Failed to fetch balance:', error);
            }
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {!connected ? (
                <div>
                    <button
                        onClick={() => setDialogOpen(true)}
                        style={{
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                        }}
                    >
                        Select Wallet
                    </button>
                    {dialogOpen && (
                        <WalletSelectionDialog
                            wallets={wallets}
                            onWalletSelect={handleWalletSelect}
                            onClose={() => setDialogOpen(false)}
                        />
                    )}
                </div>
            ) : (
                <>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <ChangeWalletButton disconnect={disconnect} />
                        <WalletBalances fetchBalance={fetchBalance} balance={balance} />
                    </div>
                    <div>
                        <WalletDetails walletAddress={walletAddress} />
                    </div>
                </>
            )}
        </div>
    );
};

export default WalletConnector;
