/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    serverActions: {
      allowedOrigins: ["lifeguage.elidayjuma.com"],
    },
  },
  output: "export",
};
