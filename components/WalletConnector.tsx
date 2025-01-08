import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletName } from '@solana/wallet-adapter-base';
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
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (publicKey) {
            setWalletAddress(publicKey.toString());
        } else {
            setWalletAddress(null);
        }
    }, [publicKey]);

    useEffect(() => {
        if (walletAddress) {
            fetchBalance();
        }
    }, [walletAddress]);

    const handleWalletSelect = async (walletName: WalletName) => {
        setIsLoading(true);
        try {
            setErrorMessage(null);
            console.log('Selecting wallet:', walletName);
            select(walletName); // Select the wallet
            console.log('Wallet selected successfully.');
            if (!connected) {
                console.log('Connecting to wallet...');
                await connect(); // Connect to the selected wallet
                console.log('Wallet connected successfully.');
            }
            setDialogOpen(false);
        } catch (error) {
            setErrorMessage('Failed to connect wallet. Please ensure a wallet is selected.');
            console.error('Error connecting wallet:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const fetchBalance = async () => {
        setIsLoading(true);
        try {
            if (walletAddress) {
                const fetchedBalance = await getAllBalances(walletAddress);
                setBalance(fetchedBalance);
            }
        } catch (error) {
            setErrorMessage('Failed to fetch balance. Please try again.');
            console.error('Failed to fetch balance:', error);
        } finally {
            setIsLoading(false);
        }
    };

    if (!wallets || wallets.length === 0) {
        return <p>No wallets available. Please install a wallet extension.</p>;
    }

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
                        disabled={isLoading}
                    >
                        {isLoading ? 'Connecting...' : 'Select Wallet'}
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
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
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
