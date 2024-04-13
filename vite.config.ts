import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	css: {
		modules: {
			generateScopedName: "[name]-[local]___[hash:base64:2]",
			localsConvention: "camelCase",
		},
	},
});
