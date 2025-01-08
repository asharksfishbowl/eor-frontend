import Link from "next/link";
import React from "react";
import Tooltip from '@mui/material/Tooltip';
import dynamic from "next/dynamic";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { wallets, network } from '../configs/walletConfig';

// Dynamically import WalletConnector if it relies on browser-specific APIs
const WalletConnector = dynamic(() => import("@components/WalletConnector"), { ssr: false });

const Menu = ({
    isMenuOpen,
    setIsMenuOpen
}: {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const endpoint = `https://api.${network}.solana.com`;

    return (
        <nav className="container mx-auto flex justify-between items-center mt-14">
            <ul className="hidden md:flex space-x-6">
                <li>
                    <Tooltip title="Dashboard" arrow>
                        <Link href="/dashboard" className="hover:text-prismai-red flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M3 10h11M9 21v-6m-6 0v-6m0 0L9 3m0 6h12m0 0v6m0 0L9 21"/>
                            </svg>
                            <span className="sr-only">Dashboard</span>
                        </Link>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip title="Roadmap" arrow>
                        <Link href="/roadmap" className="hover:text-resist-cyan flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M9 17v-4a3 3 0 013-3h3a3 3 0 013 3v4m-3 4h6m-6 0a3 3 0 01-3-3m3 3v4m0-4a3 3 0 013-3m0 0h3"/>
                            </svg>
                            <span className="sr-only">Roadmap</span>
                        </Link>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip title="About Us" arrow>
                        <Link href="/about" className="hover:text-prismai-red flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3m12 0a3 3 0 00-6 0m6 0h3m0 0a3 3 0 00-6 0m-6 0h-3m0 0a3 3 0 006 0m0 0h3m0 0a3 3 0 006 0m-6 0h-3m0 0a3 3 0 00-6 0m0 0h-3m0 0a3 3 0 006 0m0 0h3"/>
                            </svg>
                            <span className="sr-only">About Us</span>
                        </Link>
                    </Tooltip>
                </li>
                <li>
                    <Tooltip title="Contact Us" arrow>
                        <Link href="/contact" className="hover:text-resist-cyan flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 5v16m7-10l-7 7m0-14L5 17"/>
                            </svg>
                            <span className="sr-only">Contact Us</span>
                        </Link>
                    </Tooltip>
                </li>
            </ul>
            <div className="hidden md:flex space-x-4">
                <div className="px-4">
                    <ConnectionProvider endpoint={endpoint}>
                        <WalletProvider wallets={wallets} autoConnect>
                            <WalletModalProvider>
                                <WalletConnector />
                            </WalletModalProvider>
                        </WalletProvider>
                    </ConnectionProvider>
                </div>
                <Link href="/signup"
                      className="block px-4  bg-resist-blue text-white rounded-lg hover:bg-resist-cyan transition flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M16 7V3m0 0a4 4 0 10-8 0v4m8 0H8m4 0v10m4 0H8"/>
                    </svg>
                    <span>Sign Up</span>
                </Link>
                <Link href="/signin"
                      className="block px-4  bg-prismai-purple text-white rounded-lg hover:bg-prismai-lightRed transition flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M12 11V9m0 4h.01m-6.93-4a3 3 0 010 4.243L5 14m14-6a3 3 0 010 4.243L19 14m-7-3a3 3 0 011 2.243m-3-4.486a3 3 0 010 4.243m0 0L11 16m2 0l-.866.5M11 17m1-5h.01m-6.93-4a3 3 0 010 4.243L5 14m0 0l2 2m14-6a3 3 0 010 4.243L19 14m0 0l-2 2"/>
                    </svg>
                    <span>Sign In</span>
                </Link>
            </div>
            <button
                className="md:hidden text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
            </button>
        </nav>
    );
};

export default Menu;
