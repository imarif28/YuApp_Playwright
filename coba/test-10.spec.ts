import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
   await page.goto('https://yuapp.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('IlhamQA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('IlhamQA123');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: /Promo/ }).click();
  await page.goto('https://yuapp.noretest2.com/masterpromo');
  await page.getByLabel('Search:').fill('Playwright');
  await page.locator('tbody tr', { hasText: 'Playwright' }).first().getByTitle('Aktivasi').click();
  await expect(page.locator('#aktform')).toBeVisible();
  await page.getByRole('button', { name: 'Aktivasi' }).click();
  await expect(page.getByRole('heading', { name: 'Success' })).toBeVisible();
});