const { defineConfig } = require("cypress");
const { createHero, deleteHero } = require("./cypress/support/data.cjs");

module.exports = defineConfig({
  projectId: "nd8nd1",

  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      on("task", {
        createHero,
        deleteHero,
      });
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
