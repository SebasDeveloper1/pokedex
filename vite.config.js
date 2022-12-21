import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, "src/App"),
      icons: path.resolve(__dirname, "src/assets/icons"),
      images: path.resolve(__dirname, "src/assets/images"),
      videos: path.resolve(__dirname, "src/assets/videos"),
      components: path.resolve(__dirname, "src/components"),
      containers: path.resolve(__dirname, "src/containers"),
      context: path.resolve(__dirname, "src/context"),
      hooks: path.resolve(__dirname, "src/hooks"),
      pages: path.resolve(__dirname, "src/pages"),
      routes: path.resolve(__dirname, "src/routes"),
      services: path.resolve(__dirname, "src/services"),
      styles: path.resolve(__dirname, "src/styles"),
      utils: path.resolve(__dirname, "src/utils"),
      api: path.resolve(__dirname, "src/api"),
      actions: path.resolve(__dirname, "src/actions"),
      reducers: path.resolve(__dirname, "src/reducers"),
      middlewares: path.resolve(__dirname, "src/middlewares"),
      slices: path.resolve(__dirname, "src/slices"),
    },
  },
});
