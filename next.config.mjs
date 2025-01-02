/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // basePath: '/elnwebsitenext',

    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true, //Ignores ESLint errors during the build process
    },

};

export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export', // Enables static export
//     basePath: '/elnwebsitenext', // Sets the base path
//     reactStrictMode: true,
//     trailingSlash: true, // Adds a slash at the end of paths
//     images: {
//       unoptimized: true, // Allows unoptimized images for static export
//     },
//     eslint: {
//       ignoreDuringBuilds: true, // Ignores ESLint errors during build
//     },
//   };
  
//   export default nextConfig;
  