import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // Use jsdom for browser-like tests
    reporters: process.env.GITHUB_ACTIONS ? ['verbose', 'github-actions', 'json', 'html']:['verbose','json', 'html'],
  },
})
