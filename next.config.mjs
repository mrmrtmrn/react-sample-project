/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',
  images: {
    loader: 'imgix',
    path: process.env.NEXT_PUBLIC_ASSET_PREFIX || '',
  },
};

export default nextConfig;
