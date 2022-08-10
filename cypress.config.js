const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    // baseUrl: "http://localhost:57951/",
    video: false,
    responseTimeout: 15000,
    waitForAnimations: true,
    watchForFileChanges: true,
    viewportWidth: 1000,
    viewportHeight: 600,
    defaultCommandTimeout: 5000,
    execTimeout: 60000,
    pageLoadTimeout: 60000,
    requestTimeout: 15000,


    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    // },

  },
});
