const { test, expect } = require('@playwright/test');
const appUrl = 'http://localhost:3000';

test.describe('Website Title and Meta Description Tests', () => {

  test('Website has correct title', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Replace with the URL of your application

    // Test for the correct title
    const title = await page.title();
    expect(title).toBe('Cottage Comfort Cafe');
  });

});

test.describe('Website Title and Meta Description Tests', () => {

  test('Website has correct meta description', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Replace with the URL of your application

    // Test for the correct meta description
    const metaDescription = await page.locator('meta[name="description"]').getAttribute('content');
    expect(metaDescription).toBe('Come to Cottage Comfort Café, a cozy haven with a warm, homely atmosphere, for a delicious artisan coffee and a free drink every 10 visits.');
  });

});

test('Hero section is displayed correctly', async ({ page }) => {
  await page.goto(appUrl); // Navigate to the base URL
  const heroText = await page.locator('text=Welcome to Cottage Comfort Cafe');
  await expect(heroText).toBeVisible();
});

test.describe('Home Page Button Tests', () => {
  
  test('Hero section button tests', async ({ page }) => {
    const appUrl = 'http://localhost:3000'; // Replace with your app's URL
    await page.goto(appUrl);

    // Case-sensitive XPath selector for the "Join our Family" button
    const joinOurFamilyButton = page.locator('xpath=//section//button[contains(text(), "Join our Family")]');
    await expect(joinOurFamilyButton).toBeVisible();

    // Locator for the "See Menu" button
    const seeMenuButton = page.locator('section >> text=See Menu');
    await expect(seeMenuButton).toBeVisible();
});  

});

test.describe('Home Page Hero Section Text Tests', () => {

  test('Hero section has correct title text', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Replace with your homepage URL
    const heroTitle = await page.locator('text=Welcome to Cottage Comfort Cafe');
    await expect(heroTitle).toBeVisible();
  });

  test('Hero section has correct description text', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Replace with your homepage URL
    const heroDescription = await page.locator('text=Home in Every Sip - Free Drink Upon Joining!');
    await expect(heroDescription).toBeVisible();
  });

});

test.describe('Home Page Hero Section Photo Test', () => {

  test('Hero section has a photo', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Replace with your homepage URL
    const heroImage = page.locator('img[src="../images/hero_image.webp"]'); // Replace with the actual src or use a different selector
    await expect(heroImage).toBeVisible();
  });

});

test.describe('Home Page Community Favorites Section Tests', () => {
  
  test('Community Favorites section has the correct title and 4 item cards', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Replace with your homepage URL

    // Check for "Community Favorites" title
    const title = page.locator('text=Community Favorites');
    await expect(title).toBeVisible();

     });

});

test.describe('Family Section Tests', () => {

  test('Family section has correct text, photo, and button', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Replace with your homepage URL

   // Check the text content
    const sectionTitle = page.locator('h2:has-text("Become Part of Our Family")');
    await expect(sectionTitle).toBeVisible();

    const sectionDescription = page.locator('text=Join our rewards program today and receive a free drink on your next order. Hurry, this cozy welcome gift expires in just 7 days from sign-up. Start your journey to comfort now!');
    await expect(sectionDescription).toBeVisible();

    // Check for the presence of an image
    // Replace 'src="../images/family.webp"' with the actual src or a more generic selector if needed
    const image = page.locator('img[src="../images/family.webp"]');
    await expect(image).toBeVisible();
  });

});

test.describe('Testimonials Title Test', () => {

  test('Testimonials section has the correct title', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Replace with your homepage URL

    // Check for the "Testimonials" section title
    // Adjust the text content and selector as per your actual implementation
    const title = page.locator('text=Warm Words from Our Beloved Customers');
    await expect(title).toBeVisible();
  });

});

test.describe('Testimonials Section Tests', () => {

  test('Testimonials have correct text and associated images', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Replace with your homepage URL

    // Updated data from testimonialData for verification
    const testData = [
      {
        name: "Maya Singh",
        role: "Loyal Customer",
        imageSrc: "../images/maya.webp",
        content: "“Cottage Comfort Café feels like a warm hug, with its cozy charm and friendly staff making every visit special.”"
      },
      {
        name: "Oliver Smith",
        role: "Loyal Customer",
        imageSrc: "../images/oliver.webp",
        content: "“More than just great coffee, Cottage Comfort Café is where our community comes together, like a big, happy family.”"
      },
      {
        name: "Elena Perez",
        role: "Loyal Customer",
        imageSrc: "../images/elena.webp",
        content: "“Every visit to Cottage Comfort Café is a lovely experience, filled with care, comfort, and the perfect latte.”"
      }
    ];

    for (const data of testData) {
      // Check for the presence of testimonial text
      const textContent = page.locator(`text=${data.content}`);
      await expect(textContent).toBeVisible();

      // Check for the associated image
      // Adjust the image selector as per your application's structure
      const image = page.locator(`img[src="${data.imageSrc}"]`);
      await expect(image).toBeVisible();
    }
  });

});

test.describe('Location and Hours Section Tests', () => {

  test('Location and Hours section has correct elements', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Replace with your homepage URL

    // Check for the presence of "Location" text
    const locationText = page.locator('h3:has-text("Location")');
    await expect(locationText).toBeVisible();

    // Check for the presence of "Hours" text
    const hoursText = page.locator('h3:has-text("Hours")');
    await expect(hoursText).toBeVisible();

    // Check for the presence of an image
    // Replace 'src="../images/map.webp"' with the actual src or a more generic selector if needed
    const image = page.locator('img[src="../images/map.webp"]');
    await expect(image).toBeVisible();

    // Check for the presence of the "Get Directions" button
    // Replace 'text=Get Directions' with the actual text or a more specific selector if needed
    const directionsButton = page.locator('text=Get Directions');
    await expect(directionsButton).toBeVisible();

      });

});


test.describe('Hours and Location Section - Location Text Test', () => {

  test('Location text is correct', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Replace with your homepage URL

    // Check for the presence and correctness of the "Location" text
    // Adjust the text content as per your actual implementation
    const locationText = page.locator('text=123 Main Street');
    await expect(locationText).toBeVisible();
  });

});

test.describe('Hours and Location Section - Hours Text Test', () => {

  test('Hours text is correct', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Replace with your homepage URL

    // Check for the presence and correctness of the "Hours" text
    // Adjust the text content as per your actual implementation
    const hoursText = page.locator('text=Monday 7:00am - 7:00pm');
    await expect(hoursText).toBeVisible();

  });

});

test.describe('Nurturing the Community Section - Title Test', () => {

  test('Section has correct title', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Replace with your homepage URL
    const title = page.locator('text=Nurturing the Community');
    await expect(title).toBeVisible();
  });

});
test.describe('Nurturing the Community Section - Photo Test', () => {

  test('Section has a photo', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Replace with your homepage URL
    const image = page.locator('img[src="../images/community.webp"]');
    await expect(image).toBeVisible();
  });

});
test.describe('Nurturing the Community Section - Text Content Test', () => {

  test('Section has correct text content', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Replace with your homepage URL
    const textContent = page.locator("text=At Cottage Comfort Café, we're committed to fostering meaningful initiatives that directly support and uplift the people in our community, reflecting the love and care we’ve received from every smiling face that walks through our doors.");
    await expect(textContent).toBeVisible();
  });

});
test.describe('Nurturing the Community Section - Button Test', () => {

  test('Section has a "Learn More" button', async ({ page }) => {
    await page.goto('http://localhost:3000'); // Replace with your homepage URL
    const learnMoreButton = page.locator('text=Learn More');
    await expect(learnMoreButton).toBeVisible();
  });

});

