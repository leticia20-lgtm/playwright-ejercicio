const { test, expect } = require('@playwright/test');

test('abrir la página de Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});