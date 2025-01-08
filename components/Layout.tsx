import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import ResponsiveMenu from "@components/ResponsiveMenu";
import Menu from "@components/Menu";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Head>
                <title>Echos of Resistance</title>
                <meta name="description" content="Manage factions and more in EoR" />
                <link rel="icon" href="/favicon.ico" />
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
                    <div className="header-container flex items-center space-x-4 h-20">
                        <div className="h-full w-auto flex-shrink-0">
                            <Image
                                className="flag-animation background-image-header-symbol object-contain"
                                src="/images/Symbol.png"
                                alt="Symbol"
                                height={100}
                                width={100}
                                priority={true}
                            />
                        </div>
                        <div className="header-background shadow-neon border h-full flex-shrink-0">
                            <Image
                                className="background-image-header object-contain"
                                src="/images/echos_of_resistance_title.png"
                                alt="Echos of Resistance"
                                height={100}
                                width={100}
                             priority={true}
                        />
                        </div>
                    </div>
                    <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
                    {isMenuOpen && (
                        <ResponsiveMenu isMenuOpen={isMenuOpen} />
                    )}
                </header>
                <main className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">{children}</main>
            </div>
        </>
    );
};

export default Layout;
