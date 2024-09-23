const dotenv = require('dotenv')
dotenv.config()

const nextConfig = {
  // reactStrictMode: true, // enabled react-strict mode
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
    domains: [
      'i.ibb.co',
    ],
  },

};

module.exports = nextConfig;
