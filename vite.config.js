import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["vue", "vue-router"],
          ui: ["naive-ui"],
        },
      },
    },
  },
  server: {
    historyApiFallback: true,
  },
});
