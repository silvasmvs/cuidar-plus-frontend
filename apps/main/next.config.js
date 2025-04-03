/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    async rewrites() {
        return [
            {
            source: "/docs/:path*",
            destination: "http://localhost:3001/:path*",
            },
            {
            source: "/web/:path*",
            destination: "http://localhost:3002/:path*",
            },
        ];
    },
};

export default config;
