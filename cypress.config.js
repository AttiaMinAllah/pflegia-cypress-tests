const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://pflegia-preview:OzGThqtEibWyOsXIOc36dTWgGep0Yjzy@staging.pflegia.de',
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
