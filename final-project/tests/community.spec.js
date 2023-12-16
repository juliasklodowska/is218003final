import { test, expect } from '@playwright/test';

test.describe('Community Page - Title and Meta Description Test', () => {

  test('Correct title and meta description', async ({ page }) => {
    await page.goto('http://localhost:3000/community'); // Replace with the correct URL

    // Check for the correct title
    const title = await page.title();
    expect(title).toBe('Community');

    // Check for the correct meta description
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toBe('Cottage Comfort Café Community is a place where we come together to share kindness and support, making a positive impact on our local community.');
  });

});
test.describe('Community Page - Giving Back to the Community Section Test', () => {

  test('Section has correct elements', async ({ page }) => {
    await page.goto('http://localhost:3000/community'); // Replace with the correct URL

    // Check for the presence of the section title
    const title = page.locator('text=Giving Back to the Community');
    await expect(title).toBeVisible();

    // Check for the presence of the section image
    const image = page.locator('img[src="../images/giving.png"]');
    await expect(image).toBeVisible();

    // Check for the presence of the section description
    const description = page.locator('text=Cottage Comfort Café pulses with community spirit...');
    await expect(description).toBeVisible();
  });

});

test.describe('Community Page - Events Title Test', () => {

  test('Events title is visible', async ({ page }) => {
    await page.goto('http://localhost:3000/community'); // Replace with the correct URL

    const eventsTitle = page.locator('text=Events');
    await expect(eventsTitle).toBeVisible();
  });

});


test.describe('Community Page - Food Drive Donations Section Test', () => {

  test('Food Drive section has correct title, description, and photo', async ({ page }) => {
    await page.goto('http://localhost:3000/community'); // Replace with the correct URL

    // Check for the presence of the "Food Drive Donations" title
    const title = page.locator('text=Food Drive Donations');
    await expect(title).toBeVisible();

    // Check for the presence of the "Food Drive Donations" description
    const description = page.locator('text=We host food drives frequently for local shelters and families in need...');
    await expect(description).toBeVisible();

    // Check for the presence of the "Food Drive Donations" photo
    const image = page.locator('img[src="../images/fooddrive.png"]');
    await expect(image).toBeVisible();
  });

});

test.describe('Community Page - Gardening Section Test', () => {

  test('Gardening section has correct title, description, and photo', async ({ page }) => {
    await page.goto('http://localhost:3000/community'); // Replace with the correct URL

    // Check for the presence of the "Gardening" title
    const title = page.locator('text=Gardening');
    await expect(title).toBeVisible();

    // Check for the presence of the "Gardening" description
    const description = page.locator('text=Seasonally, we enrich community gardens with our very own coffee grounds...');
    await expect(description).toBeVisible();

    // Check for the presence of the "Gardening" photo
    const image = page.locator('img[src="../images/garden.png"]');
    await expect(image).toBeVisible();
  });

});
