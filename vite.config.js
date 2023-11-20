import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/https://doyun5223.github.io/dyblog//",
  plugins: [react()],
});
