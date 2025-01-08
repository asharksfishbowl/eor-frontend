import { WalletAdapterNetwork, WalletReadyState} from '@solana/wallet-adapter-base';
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { Wallet } from '@solana/wallet-adapter-react';

export const network: WalletAdapterNetwork = WalletAdapterNetwork.Devnet; // Use 'Mainnet' for production

export const wallets: Wallet[] = [
    {
        adapter: new PhantomWalletAdapter(),
        readyState: WalletReadyState.Installed
    },
    {
        adapter: new SolflareWalletAdapter(),
        readyState: WalletReadyState.Installed
    },
    {
        adapter: new TorusWalletAdapter(),
        readyState: WalletReadyState.Installed
    },
];
