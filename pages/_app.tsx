import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/Dashboard.css';
import '../styles/Header.css';
import { WalletProvider } from '../context/WalletContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Your application description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <WalletProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </WalletProvider>
        </>
    );
}

export default MyApp;
