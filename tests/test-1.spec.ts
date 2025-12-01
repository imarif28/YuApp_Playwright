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
  await page.getByRole('link', { name: 'Tambah' }).click();
  await page.locator('input[placeholder="YUAPP100"]').fill('Playwright');
  await page.locator('#deskripsi').fill('Dibuat Melalui Playwright');
  await page.locator('input[name="persentase_potongan"]').fill('12');
  await page.locator('input[name="max_potongan"]').fill('200000');
  await page.locator('input[name="minimal_pembelian"]').fill('120000');
  await page.locator('#is_event').selectOption('0');
  await page.getByRole('button', { name: 'Simpan' }).click();
  await expect(page.getByRole('heading', { name: 'Success' })).toBeVisible();
});