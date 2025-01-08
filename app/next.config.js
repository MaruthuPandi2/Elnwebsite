/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const nextConfig = {
  reactStrictMode: false,
  basePath: '/elnwebsitenext',
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      })
    );
    return config;
  },
};


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
