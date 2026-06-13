import { test, expect } from '@playwright/test';

test('EPAM Services → Client Work page is reachable from the Services menu', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('link', { name: 'Services' }).nth(1).click();
  await expect(page).toHaveURL('https://www.epam.com/services');

  await page.getByRole('link', { name: 'Explore Our Client Work' }).first().click();
  await expect(page).toHaveURL('https://www.epam.com/services/client-work');
  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
});
