/** @type {import('next').NextConfig} */
const nextConfig = {};

//module.exports = nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/twat",
        permanent: true,
      },
    ];
  },
};
/*
module.exports = {
  async redirects() {
    return [
      {
        source: "/:path((?!WIP).*)",
        destination: "/WIP",
        permanent: false,
      },
    ];
  },
};
*/
