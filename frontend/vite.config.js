import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), GeoapifyGeocoderAutocomplete(), GeoapifyContext()],
  build: {
    rollupOptions: {
      external: {[
        "react", // ignore react stuff
        "react-dom",
      ],
    },
  },
  optimizeDeps: {
    include: ["@geoapify/react-geocoder-autocomplete"],
  },
    outDir: "build",
  },
});
