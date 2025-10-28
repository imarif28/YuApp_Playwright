import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://yuapp.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('IlhamMarketing');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.goto('https://yuapp.noretest2.com/dashboard');
  await page.getByRole('link', { name: /Order/ }).click();
  await page.locator('tbody tr').first().getByRole('button').first().click();
  await page.locator('#status_id_bo').selectOption({ label: 'Menunggu pembayaran' });
  await page.getByRole('button', { name: 'Update ' }).click();
  await expect(page.getByText('SuccessOrder berhasil')).toBeVisible();
});