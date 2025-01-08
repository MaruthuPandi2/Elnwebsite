/** @type {import('next').NextConfig} */
const nextConfig = {
    // Removed `output: 'export'` for dynamic features
    
    reactStrictMode: true,
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
    eslint: {
      ignoreDuringBuilds: true, // Ignores ESLint errors during the build process
    },
  };
  
  export default nextConfig;
  