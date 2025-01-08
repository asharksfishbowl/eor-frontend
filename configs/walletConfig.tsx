import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';

// Define the Solana network
export const network: WalletAdapterNetwork = WalletAdapterNetwork.Mainnet; // Change to 'Devnet' or 'Testnet' for development

// Define wallet adapters
export const wallets = [
    new PhantomWalletAdapter(),
    new SolflareWalletAdapter(),
    new TorusWalletAdapter(),
];
