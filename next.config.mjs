/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // basePath: '/elnwebsitenext',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
