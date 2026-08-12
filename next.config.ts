import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow phone / LAN testing against this machine's IP (not just localhost).
  // Without this, Next blocks /_next/* (HMR, fonts, chunks) from other devices.
  allowedDevOrigins: [
    "10.251.12.62",
    "127.0.0.1",
    "localhost",
  ],
};

export default nextConfig;
