/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'build',
    output: 'standalone',
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://eor-backend-hdfeg2dqhaasbqhs.canadacentral-01.azurewebsites.net',
    },
    async rewrites() {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://eor-backend-hdfeg2dqhaasbqhs.canadacentral-01.azurewebsites.net';
        console.log("Using API URL:", apiUrl); // Debugging log
        return [
            {
                source: '/api/:path*',
                destination: `${apiUrl}/api/:path*`,
            },
        ];
    },
};

export default nextConfig;
