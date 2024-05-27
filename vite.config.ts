import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: "src/main.ts",
      name: "MultpleOf3",
      fileName: "multiple-of-3",
    },
  },
});
