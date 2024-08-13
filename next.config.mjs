/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: process.env.NODE_ENV === 'production' ? '/react-sample-project' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/react-sample-project/' : '',
};

export default nextConfig;
