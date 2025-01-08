import React, { createContext, useContext, useState, useMemo } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';

// Token mint addresses
const TOKEN_MINTS = {
    AI: '8cDa8meex4gBTNxv8TKvRBZ7adqVmuG6wZdAv1SV1m5G',
    HUMAN: '9MxKc1nnEb9nG43w4EZFDS3EFVNKftit5GK9W7P9BY61',
};

// Context type
interface WalletContextType {
    connection: Connection;
    getAllBalances: (publicKey: string) => Promise<{ SOL: number; AI: number; HUMAN: number }>;
    rpcUrl: string;
}

// Default context
const WalletContext = createContext<WalletContextType | undefined>(undefined);

// Wallet Provider Component
export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const rpcUrl = process.env.REACT_APP_SOLANA_RPC_URL || 'https://api.devnet.solana.com';
    const connection = useMemo(() => new Connection(rpcUrl, 'confirmed'), [rpcUrl]);

    const getAllBalances = async (publicKey: string): Promise<{ SOL: number; AI: number; HUMAN: number }> => {
        try {
            // Fetch SOL balance
            const solBalanceLamports = await connection.getBalance(new PublicKey(publicKey));
            const solBalance = solBalanceLamports / 1_000_000_000; // Convert Lamports to SOL

            // Fetch parsed token accounts owned by the wallet
            const tokenAccounts = await connection.getParsedTokenAccountsByOwner(new PublicKey(publicKey), {
                programId: new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'),
            });

            // Initialize token balances
            const tokenBalances = { AI: 0, HUMAN: 0 };

            // Iterate through token accounts and match mint addresses
            for (const tokenAccount of tokenAccounts.value) {
                const parsedInfo = tokenAccount.account.data.parsed.info;
                const mintAddress = parsedInfo.mint;
                const balance = parsedInfo.tokenAmount.uiAmount || 0;

                if (mintAddress === TOKEN_MINTS.AI) {
                    tokenBalances.AI = balance;
                } else if (mintAddress === TOKEN_MINTS.HUMAN) {
                    tokenBalances.HUMAN = balance;
                }
            }

            return {
                SOL: solBalance,
                ...tokenBalances,
            };
        } catch (error) {
            console.error('Failed to fetch balances:', error);
            return {
                SOL: 0,
                AI: 0,
                HUMAN: 0,
            };
        }
    };

    return (
        <WalletContext.Provider value={{ connection, getAllBalances, rpcUrl }}>
            {children}
        </WalletContext.Provider>
    );
};

// Custom hook to use WalletContext
export const useWalletContext = (): WalletContextType => {
    const context = useContext(WalletContext);
    if (!context) {
        throw new Error('useWalletContext must be used within a WalletProvider');
    }
    return context;
};
