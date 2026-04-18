const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './Tests',
  reporter: 'html',
  use: {
    headless: true,
  },
});
