import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5174", // Bu satır eklendi
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
