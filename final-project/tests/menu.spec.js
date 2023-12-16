import { test, expect } from '@playwright/test';

test.describe('Full Menu Page - Main Title Test', () => {

  test('Main title is correctly displayed', async ({ page }) => {
    await page.goto('http://localhost:3000/full-menu'); // Replace with your Full Menu page URL

    const mainTitle = page.locator('text=Full Menu');
    await expect(mainTitle).toBeVisible();
  });

});

test.describe('Full Menu Page - Specialty Drinks Title Test', () => {

  test('Specialty Drinks title is correctly displayed', async ({ page }) => {
    await page.goto('http://localhost:3000/full-menu'); // Replace with your Full Menu page URL

    const specialtyDrinksTitle = page.locator('text=Specialty Drinks');
    await expect(specialtyDrinksTitle).toBeVisible();
  });

});

test.describe('Full Menu Page - Regular Menu Title Test', () => {

  test('Regular Menu title is correctly displayed', async ({ page }) => {
    await page.goto('http://localhost:3000/full-menu'); // Replace with your Full Menu page URL

    const regularMenuTitle = page.locator('text=Regular Menu');
    await expect(regularMenuTitle).toBeVisible();
  });

});

