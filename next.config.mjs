/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    // SERVER_URL: "http://localhost:3002",
    SERVER_URL: "https://backendcuriers.onrender.com",
    JWT_KEY: "package_app_jwt",
  },
};

export default nextConfig;
