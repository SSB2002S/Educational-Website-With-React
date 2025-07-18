import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/Educational-Website-With-React/",
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
});
