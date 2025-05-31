import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // Use jsdom for browser-like tests
    coverage: {
    reporter: ['text', 'json', 'html'], // Optional: Add coverage reports
    },
  },
})
