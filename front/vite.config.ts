import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    server: {
        host: true,
        port: 3000,
        hmr: {
            protocol: "ws",
            host: "localhost",
            port: 3000,
        },
        watch: {
            usePolling: true,
            interval: 1000,
            binaryInterval: 3000,
        },
    },
});
