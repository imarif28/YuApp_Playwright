import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://yuapp-customer.noretest.com/');
  await page.getByRole('button', { name: 'Masuk', exact: true }).click();
  await page.getByRole('textbox', { name: 'Masukkan Nomor WhatsApp Anda' }).click();
  await page.getByRole('textbox', { name: 'Masukkan Nomor WhatsApp Anda' }).fill('82223695795');
  await page.getByRole('textbox', { name: 'Masukkan Kata Sandi' }).click();
  await page.getByRole('textbox', { name: 'Masukkan Kata Sandi' }).fill('!Ilham123');
  await page.getByRole('button', { name: 'Masuk' }).click();
  await page.locator('button:has(div.MuiAvatar-root)').click();
  await page.getByRole('menuitem', { name: 'Daftar Transaksi' }).click();

  await expect(
    page.locator('.MuiBox-root.mui-1i31c9e')
      .filter({ hasText: 'Menunggu pembayaran' })
      .getByRole('link', { name: 'Pilih Pengiriman' })
      .first()
  ).toBeVisible({ timeout: 10000 });
  await page.locator('.MuiBox-root.mui-1i31c9e')
    .filter({ hasText: 'Menunggu pembayaran' })
    .getByRole('link', { name: 'Pilih Pengiriman' })
    .first()
    .click();
  await expect(page.locator('.MuiStack-root.mui-envg9n')).toBeVisible();
  await page.locator('label').filter({ hasText: 'Pengiriman Via UdaraSekitar ±' }).click();
  await page.getByTestId('CloseRoundedIcon').click();
  // await page.getByRole('button', { name: 'Belum ada metode terpilih' }).click();
  // await page.getByRole('radio', { name: 'VA_PERMATA' }).check();
  // await page.getByRole('button', { name: 'Pilih Metode Pembayaran' }).click();
  // await page.getByRole('button', { name: 'Checkout' }).click();
  // await expect(page.getByRole('heading', { name: 'PERMATA Virtual Account' })).toBeVisible({ timeout: 10000 });

});