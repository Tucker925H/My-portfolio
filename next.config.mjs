/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'static.zenn.studio' },
    ],
  },
}
export default nextConfig
