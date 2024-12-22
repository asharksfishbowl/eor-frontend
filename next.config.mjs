/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    distDir: 'build',
    output: 'standalone',
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'https://default-api-url.com',
    },
    async rewrites() {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://default-api-url.com';
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
