import react from "@vitejs/plugin-react";
import { ESLint } from "eslint";
// import { ESLint } from "eslint";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
