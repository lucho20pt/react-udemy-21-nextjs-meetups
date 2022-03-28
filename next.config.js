/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // DB_LOCAL_URI: 'mongodb+srv://lucho20pt:pantufa20@cluster0.ls90a.mongodb.net/test'
    // DB_LOCAL_URI: 'mongodb://localhost:27017/react-next-bookit'
  },
  images: {
    domains: ['upload.wikimedia.org'],
  }
}

module.exports = nextConfig

