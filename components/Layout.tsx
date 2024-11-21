import React from 'react';
import Head from 'next/head';
import Link from 'next/link';


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Echos of Resistance</title>
                <meta name="description" content="Manage factions and more in EoR" />
            </Head>
            <div className="circuit-border min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
                <div className="background-image">
                    <img  src="images/futuristic_pcb_website_background.png"/>
                </div>
                <header className="p-6 border-b border-gray-800">
                    <div className="header-background shadow-neon border">
                        <img className="background-image-header" src="images/echos_of_resistance_title.png" alt="Echos of Resistance"/>
                    </div>
                    <nav className="content container mx-auto flex justify-between items-center">
                        <ul className="flex space-x-6">
                            <li><Link href="/dashboard" className="hover:text-prismai-red">Dashboard</Link></li>
                            <li><Link href="/roadmap" className="hover:text-resist-cyan">Roadmap</Link></li>
                            <li><Link href="/about" className="hover:text-prismai-red">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-resist-cyan">Contact Us</Link></li>
                        </ul>
                        <div className="flex space-x-4">
                            <Link href="/signup"
                                  className="px-4 py-2 bg-resist-blue text-white rounded-lg hover:bg-resist-cyan transition">
                                Sign Up
                            </Link>
                            <Link href="/signin"
                                  className="px-4 py-2 bg-prismai-purple text-white rounded-lg hover:bg-prismai-lightRed transition">
                                Sign In
                            </Link>
                        </div>
                    </nav>
                </header>
                <main className="container mx-auto py-10 px-6">{children}</main>
            </div>
        </>
    );
};

export default Layout;
