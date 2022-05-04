/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        HOST: "http://localhost:3000"
    },
    compiler: {
        styledComponents: true,
    },
}

module.exports = nextConfig
