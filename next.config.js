/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      console.log('config', path.resolve(process.cwd() + "/node_modules/react"))
      // don't resolvew 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.alias.react = path.resolve(process.cwd() + "/node_modules/react")
    }

    if (!isServer) {
      config.resolve.fallback.react = path.resolve(process.cwd() + "/node_modules/react")
    }

    return config;
  }
}
module.exports = nextConfig
