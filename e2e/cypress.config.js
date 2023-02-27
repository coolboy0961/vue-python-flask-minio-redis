const { Cypress, defineConfig } = require("cypress");

let env;
switch (process.env.STAGE) {
  case "local-confirm":
    env = {
      stage: process.env.STAGE,
      baseUrl: "https://example.cypress.io",
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
    baseUrl: env.baseUrl,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
  },
  env,
});
