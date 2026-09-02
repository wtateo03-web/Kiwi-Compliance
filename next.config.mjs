/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — the site is served as plain files by GitHub Pages.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
