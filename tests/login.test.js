import { test } from '@playwright/test';

test('Login page', async ({ page }) => {
  await page.goto('/');

  await page.fill('input[type="email"]', 'test@example.com');
  await page.fill('input[type="password"]', 'Password@123');
});