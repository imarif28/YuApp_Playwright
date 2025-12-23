import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://yuapp.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('IlhamQA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('IlhamQA123');
  await page.getByRole('button', { name: 'Sign in ' }).click();

  await page.locator('.nav-item-submenu:has-text("Banner") .nav-group-sub').evaluate((element) => {
    (element as HTMLElement).style.display = 'block';
  });

  await page.getByRole('link', { name: /Mobile/ }).click();
  await page.goto('https://yuapp.noretest2.com/banners-mobile');
  await page.getByLabel('Search:').fill('https://www.instagram.com/__dimasim/');
  await page.locator('tbody tr', { hasText: 'https://www.instagram.com/__dimasim/' }).first().getByTitle('Hapus').click();
  await expect(page.locator('#delform')).toBeVisible();
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.getByRole('heading', { name: 'Success' })).toBeVisible();
});