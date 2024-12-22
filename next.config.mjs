/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enables React's strict mode
    distDir: 'build', // Custom output directory for the build
    output: 'standalone', // Standalone mode for deployment
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001', // Use .env variable or fallback
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:path*`, // Proxy API requests to the backend
            },
        ];
    },
};

export default nextConfig;
