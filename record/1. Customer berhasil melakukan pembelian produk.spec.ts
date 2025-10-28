import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://yuapp-customer.noretest.com/');
  await page.getByRole('button', { name: 'Masuk' }).click();
  // await page.getByRole('button', { name: 'Masuk', exact: true }).click();
  await page.getByRole('textbox', { name: 'Masukkan Nomor WhatsApp Anda' }).click();
  await page.getByRole('textbox', { name: 'Masukkan Nomor WhatsApp Anda' }).fill('82223695795');
  await page.getByRole('textbox', { name: 'Masukkan Kata Sandi' }).click();
  await page.getByRole('textbox', { name: 'Masukkan Kata Sandi' }).fill('!Ilham123');
  await page.getByRole('button', { name: 'Masuk' }).click();
  await expect(page.getByRole('link', { name: 'YuApp' })).toBeVisible();
  await page.getByRole('link', { name: '1688 Tas Kebugaran Kapasitas' }).click();
  await page.getByRole('button', { name: 'Keranjang' }).click();
  await expect(page.getByRole('alert').filter({ hasText: 'Produk berhasil ditambahkan' })).toBeVisible();
  await page.getByTestId('ShoppingCartOutlinedIcon').click();
  await page.getByRole('link', { name: 'Produk Tas Kebugaran' }).click();
  await expect(page.getByRole('link', { name: 'Tas Kebugaran Kapasitas Besar' })).toBeVisible();
  await page.locator('.MuiStack-root.mui-1187icl').first().getByRole('checkbox').click();
  await expect(page.getByRole('link', { name: 'Pesan' })).toBeVisible();
  await page.getByRole('link', { name: 'Pesan' }).click();
  await expect(page.getByRole('heading', { name: 'Tas Kebugaran Kapasitas Besar' })).toBeVisible();
  await page.getByRole('button', { name: 'Buat Pesanan' }).click();
  await expect(page.getByRole('heading', { name: 'Pesanan Anda Berhasil Dibuat!' })).toBeVisible();
});