const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  //baseUrl: 'https://yourPlayground.com',
  chromeWebSecurity: false,
  defaultCommandTimeout: 90000,
  requestTimeout: 70000,
  responseTimeout: 90000,
  pageLoadTimeout: 150000,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  
});
