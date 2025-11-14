import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://yuapp.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('IlhamFinance');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: /Invoices/ }).first().click();
  await page.goto('https://yuapp.noretest2.com/invoices');
  await page.locator('tbody tr').first().getByTitle('Edit').click();
  await page.locator('#biaya_kategori_sea').selectOption({ value: '3' });

  await page.locator('#panjang1').fill('10');
  await page.locator('#panjang1').press('Tab');
  await page.locator('#lebar1').fill('10');
  await page.locator('#lebar1').press('Tab');
  await page.locator('#tinggi1').fill('10');
  await page.locator('#tinggi1').press('Tab');

  await page.locator('#biaya_kategori_air').selectOption({ value: '4' });

  await page.locator('#berat2').fill('10');
  await page.locator('#berat2').press('Tab');

  await page.getByRole('button', { name: 'Update ' }).click();
  await expect(page.getByRole('heading', { name: 'Success' })).toBeVisible();

});