import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// const user = import.meta.env.VITE_CLOUD_NAME;

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: `https://api.cloudinary.com/v1_1/dnzwh26o3`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
