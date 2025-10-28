import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://yuapp.noretest2.com/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('IlhamFinance');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.getByRole('link', { name: ' Order ' }).click();
  await page.goto('https://yuapp.noretest2.com/orders');
  await page.locator('tbody tr').first().getByTitle('Bukti Pembayaran Manual').click();
  await page.getByRole('button', { name: 'Choose File' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('dimasganteng.png');
  await page.getByRole('button', { name: 'Upload' }).click();
  await expect(page.getByRole('heading', { name: 'Success' })).toBeVisible();
  // await expect(page.getByRole('button', { name: ' APPROVE PAYMENT' })).toBeVisible();
  // await page.getByRole('button', { name: ' APPROVE PAYMENT' }).click();
  // await expect(page.locator('#modal_confirmation')).toBeVisible();
  // await page.locator('#btn_confirm_modal_submit').click();
  // await expect(page.getByRole('heading', { name: 'Success' })).toBeVisible();
});