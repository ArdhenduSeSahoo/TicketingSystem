/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => {
    return [
      {
        source: "/",
        destination:"/lyt2/gs/botsearch", //"/lyt2/gs/globalsearch",//"/allservices/allincidents",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
