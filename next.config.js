/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'links.papareact.com',
      'cdn.pixabay.com',
      'assets.chucknorris.host'
    ],
  },
}

module.exports = nextConfig
