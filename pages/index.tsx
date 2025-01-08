import dotenv from 'dotenv';
import { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

dotenv.config();

const IndexPage: NextPage = () => {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the desired page (e.g., "/dashboard")
        router.push('/dashboard');
    }, [router]);

    return null; // This page won't render anything
};

export default IndexPage;
