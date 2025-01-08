import { Connection, PublicKey } from '@solana/web3.js';

// Token mint addresses (replace with actual token mint addresses for AI and Human tokens)
const TOKEN_MINTS = {
    AI: '8cDa8meex4gBTNxv8TKvRBZ7adqVmuG6wZdAv1SV1m5G',
    HUMAN: '9MxKc1nnEb9nG43w4EZFDS3EFVNKftit5GK9W7P9BY61',
};

export const getAllBalances = async (publicKey: string): Promise<{ SOL: number; AI: number; HUMAN: number }> => {
    try {
        // Use the connection URL from an environment variable, fallback to devnet if not set
        const rpcUrl = process.env.REACT_APP_SOLANA_RPC_URL || 'https://api.devnet.solana.com';
        const connection = new Connection(rpcUrl, 'confirmed');

        // Fetch SOL balance
        const solBalanceLamports = await connection.getBalance(new PublicKey(publicKey));
        const solBalance = solBalanceLamports / 1_000_000_000; // Convert Lamports to SOL

        // Fetch parsed token accounts owned by the wallet
        const tokenAccounts = await connection.getParsedTokenAccountsByOwner(new PublicKey(publicKey), {
            programId: new PublicKey('TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'), // SPL Token Program ID
        });
        console.log('Environment Variables:', process.env);
        debugger;
        // Initialize balances for AI and Human tokens
        const tokenBalances = {
            AI: 0,
            HUMAN: 0,
            SOL: 0,
        };

        // Iterate through parsed token accounts to find balances for AI and HUMAN tokens
        for (const tokenAccount of tokenAccounts.value) {
            const parsedInfo = tokenAccount.account.data.parsed.info; // Get parsed info
            const mintAddress = parsedInfo.mint; // Token mint address
            const balance = parsedInfo.tokenAmount.uiAmount || 0; // Token balance in user-friendly format
            debugger;
            if (mintAddress === TOKEN_MINTS.AI) {
                tokenBalances.AI = balance;
            } else if (mintAddress === TOKEN_MINTS.HUMAN) {
                tokenBalances.HUMAN = balance;
            }
        }

        return {
            SOL: solBalance,
            AI: tokenBalances.AI,
            HUMAN: tokenBalances.HUMAN,
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
