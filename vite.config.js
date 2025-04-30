import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Add this line
import { fileURLToPath } from "url"; // Add this line

// Define __dirname for ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Now works without ESLint errors
    },
  },
});