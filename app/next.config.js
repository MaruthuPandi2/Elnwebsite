// /** @type {import('next').NextConfig} */
// const webpack = require('webpack');
// const nextConfig = {
//   reactStrictMode: false,
//   basePath: '/elnwebsitenext',
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     config.plugins.push(
//       new webpack.ProvidePlugin({
//         $: 'jquery',
//         jQuery: 'jquery',
//         'window.jQuery': 'jquery',
//       })
//     );
//     return config;
//   },
// };


// module.exports = nextConfig;
// /** @type {import('next').NextConfig} */
// const webpack = require('webpack');

// const nextConfig = {
//   reactStrictMode: false,
//   basePath: '/elnwebsitenext',
//   trailingSlash: true, // Ensures paths end with a slash
//   async redirects() {
//     return [
//       {
//         source: '/:path*',
//         destination: '/404',
//         permanent: false, // This ensures it's a temporary redirect
//       },
//     ];
//   },
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     config.plugins.push(
//       new webpack.ProvidePlugin({
//         $: 'jquery',
//         jQuery: 'jquery',
//         'window.jQuery': 'jquery',
//       })
//     );
//     return config;
//   },
// };

// module.exports = nextConfig;


// /** @type {import('next').NextConfig} */
// const webpack = require('webpack');

// const nextConfig = {
//   reactStrictMode: false,
//   basePath: '/elnwebsitenext',
//   trailingSlash: true, // Ensures paths end with a slash
//   async redirects() {
//     return [
//       {
//         source: '/:path*',
//         destination: '/404',
//         permanent: false, // This ensures it's a temporary redirect
//       },
//     ];
//   },
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     config.plugins.push(
//       new webpack.ProvidePlugin({
//         $: 'jquery',
//         jQuery: 'jquery',
//         'window.jQuery': 'jquery',
//       })
//     );
//     return config;
//   },
//   // Enable app directory
//   experimental: {
//     appDir: true, // This enables the use of the `app/` directory
//   },
// };

// module.exports = nextConfig;


import { NextResponse } from 'next/server';

export function middleware(req) {
    // Avoid redirecting valid 404 paths
    if (req.nextUrl.pathname === '/404') {
        return NextResponse.next();
    }
}
