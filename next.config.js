//** @type {import('next').NextConfig} */
//const nextConfig = {};

//module.exports = nextConfig;
/*
// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "/WIP",
        permanent: false,
      },
    ];
  },
};
*/

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
