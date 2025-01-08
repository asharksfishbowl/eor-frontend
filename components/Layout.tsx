import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import WalletConnector from "@components/WalletConnector";
import { wallets, network } from '../configs/walletConfig';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Head>
                <title>Echos of Resistance</title>
                <meta name="description" content="Manage factions and more in EoR" />
                {/* Favicon */}
                <link rel="icon" href="/favicon.ico" />
                {/* If using a PNG file */}
                {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
            </Head>
            <div className="circuit-border min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
                <div className="background-image">
                    <Image
                        src="/images/futuristic_pcb_website_background.png"
                        fill
                        style={{ objectFit: 'cover' }}
                        alt="Futuristic PCB Website Background"
                        priority={true}
                    />
                </div>
                <header className="p-4 border-b border-gray-800">
                    <div className="header-background relative shadow-neon border h-20 w-full">
                        <Image
                            className="background-image-header w-full h-full object-cover md:object-contain"
                            src="/images/echos_of_resistance_title.png"
                            alt="Echos of Resistance"
                            fill
                            priority={true}
                        />
                    </div>
                    <nav className="container mx-auto flex justify-between items-center mt-4">
                        <ul className="hidden md:flex space-x-4">
                            <li><Link href="/dashboard" className="hover:text-prismai-red">Dashboard</Link></li>
                            <li><Link href="/roadmap" className="hover:text-resist-cyan">Roadmap</Link></li>
                            <li><Link href="/about" className="hover:text-prismai-red">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-resist-cyan">Contact Us</Link></li>
                        </ul>
                        <div className="hidden md:flex space-x-4">
                            <ConnectionProvider endpoint={`https://api.${network}.solana.com`} >
                                <WalletProvider wallets={wallets.map(wallet => wallet.adapter)} autoConnect>
                                    <WalletModalProvider>
                                        <div style={{ textAlign: 'center', padding: '0px' }}  className="px-4 py-2 bg-amber-900 text-white rounded-lg hover:bg-blue-500 transition">
                                            <WalletConnector />
                                        </div>
                                    </WalletModalProvider>
                                </WalletProvider>
                            </ConnectionProvider>
                            <Link href="/signup" className="px-4 py-2 bg-resist-blue text-white rounded-lg hover:bg-resist-cyan transition">
                                Sign Up
                            </Link>
                            <Link href="/signin" className="px-4 py-2 bg-prismai-purple text-white rounded-lg hover:bg-prismai-lightRed transition">
                                Sign In
                            </Link>
                        </div>
                        <button
                            className="md:hidden text-white focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </nav>
                    {isMenuOpen && (
                        <div className="md:hidden bg-gray-800 rounded-lg shadow-md mt-4">
                            <ul className="flex flex-col space-y-4 p-4">
                                <li><Link href="/dashboard" className="hover:text-prismai-red">Dashboard</Link></li>
                                <li><Link href="/roadmap" className="hover:text-resist-cyan">Roadmap</Link></li>
                                <li><Link href="/about" className="hover:text-prismai-red">About Us</Link></li>
                                <li><Link href="/contact" className="hover:text-resist-cyan">Contact Us</Link></li>
                                <li>
                                    <Link href="/wallet"
                                          className="block px-4 py-2 bg-amber-900 text-white rounded-lg hover:bg-resist-cyan transition">
                                        Wallet
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/signup"
                                          className="block px-4 py-2 bg-resist-blue text-white rounded-lg hover:bg-resist-cyan transition">
                                        Sign Up
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/signin"
                                          className="block px-4 py-2 bg-prismai-purple text-white rounded-lg hover:bg-prismai-lightRed transition">
                                        Sign In
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </header>
                <main className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">{children}</main>
            </div>
        </>
    );
};

export default Layout;
