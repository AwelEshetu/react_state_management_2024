import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5173/');
});

test.describe('Index page', () => {
  test('has index title', async ({ page }) => {  
    // Expect a title "to contain" a substring. Testing index.html title.
    await expect(page).toHaveTitle(/Testing React State management options/);
  });

  test('has page content header', async ({ page }) => {  
    // Expect a content header to be visible. Testing post page content.
    const contentHeader = await page.getByText('React state management showcase using RTK');
    await expect(contentHeader).toBeVisible();
  });

  test('has a like button', async ({ page }) => {
    const likeButton = await page.getByRole('button', { name: 'like' }).first();
    await expect(likeButton).toBeVisible();
  });

  test('has a dislike button', async ({ page }) => {
    const dislikeButton = await page.getByRole('button', { name: 'dislike' }).first();
    await expect(dislikeButton).toBeVisible();
  });
});