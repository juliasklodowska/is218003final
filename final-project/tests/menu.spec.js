import { test, expect } from '@playwright/test';

test.describe('Full Menu Page - Main Title Test', () => {

  test('Page has correct title "Full Menu"', async ({ page }) => {
    await page.goto('http://localhost:3000/menu'); // Replace with your Full Menu page URL

    // Retrieve and check the page title
    const pageTitle = await page.title();
    await expect(pageTitle).toBe('Full Menu');
  });

});

test.describe('Full Menu Page - Specialty Drinks Title Test', () => {

  test('Specialty Drinks title is correctly displayed', async ({ page }) => {
    await page.goto('http://localhost:3000/menu'); // Replace with your Full Menu page URL

    const specialtyDrinksTitle = page.locator('text=Specialty Drinks');
    await expect(specialtyDrinksTitle).toBeVisible();
  });

});

test.describe('Full Menu Page - Regular Menu Title Test', () => {

  test('Regular Menu title is correctly displayed', async ({ page }) => {
    await page.goto('http://localhost:3000/menu'); // Replace with your Full Menu page URL

    const regularMenuTitle = page.locator('text=Regular Menu');
    await expect(regularMenuTitle).toBeVisible();
  });

});

