import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://yuapp-customer.noretest.com/');
  await page.getByRole('button', { name: 'Masuk' }).click();
  await page.getByRole('button', { name: 'Masuk', exact: true }).click();
  await page.getByRole('textbox', { name: 'Masukkan Nomor WhatsApp Anda' }).click();
  await page.getByRole('textbox', { name: 'Masukkan Nomor WhatsApp Anda' }).fill('82223695795');
  await page.getByRole('textbox', { name: 'Masukkan Kata Sandi' }).click();
  await page.getByRole('textbox', { name: 'Masukkan Kata Sandi' }).fill('!Ilham123');
  await page.getByRole('button', { name: 'Masuk' }).click();
  await page.getByTestId('CameraAltIcon').click();
  await page.locator('label[for="image-search-desktop"]').click();
  await page.locator('label[for="image-search-desktop"]').setInputFiles('mobil.webp');
  await expect(page.getByText('Format gambar yang didukung adalah JPG dan PNG')).toBeVisible({ timeout: 2000 });
});