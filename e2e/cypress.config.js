const { Cypress, defineConfig } = require("cypress");

let env;
switch (process.env.STAGE) {
  case "local-confirm":
    env = {
      stage: process.env.STAGE,
      baseUrl: "http://localhost:8080",
    };
    break;
  case "dev":
    env = {
      stage: process.env.STAGE,
      baseUrl: "http://dev:8080",
    };
    break;
}

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", // https://github.com/LironEr/cypress-mochawesome-reporter
  reporterOptions: {
    embeddedScreenshots: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
  env,
});
