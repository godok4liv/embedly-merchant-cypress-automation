// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { defineConfig } from "cypress";


module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reporterPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAsset: true,
      saveAttempt: false,
    },

    baseUrl: "https://merchant-waas-dashboard-staging.embedly.ng",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('...cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
