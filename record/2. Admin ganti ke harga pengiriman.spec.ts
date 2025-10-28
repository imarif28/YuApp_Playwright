import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://yuapp.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('IlhamQA');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('IlhamQA123');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.locator('tbody tr').first().getByRole('button').first().click();
  await page.locator('#status_id_bo').selectOption({ label: 'Penyesuaian harga pengiriman' });
  await page.locator('#marketing_id').selectOption({ label: 'IlhamMarketing'  });
  await page.getByRole('button', { name: 'Update ' }).click();
  await expect(page.getByRole('alert', { name: 'Success' })).toBeVisible();
});