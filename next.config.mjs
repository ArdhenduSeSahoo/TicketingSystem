/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  reactStrictMode: false,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  redirects: () => {
    return [
      {
        source: "/",
        destination: "/lyt2/dashboard", //"/lyt2/gs/botsearch", //"/lyt2/gs/globalsearch",//"/allservices/allincidents",
        permanent: false,
      },
    ];
  },
};
nextConfig.i18n = undefined;
export default nextConfig;
