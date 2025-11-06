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
  await page.getByTestId('AddLinkRoundedIcon').click();
  await expect(page.getByRole('dialog', { name: 'Cari Berdasarkan Tautan' })).toBeVisible();
  await page.getByRole('dialog', { name: 'Cari Berdasarkan Tautan' }).getByRole('textbox').fill('https://detail.1688.com/offer/631468992893.html?spm=a26352.b28411319.offerlist.179.34bc1e62LZrPne');
  await page.getByRole('dialog', { name: 'Cari Berdasarkan Tautan' }).getByRole('button', { name: 'Cari' }).click();
  await expect(page.getByText('Penutup Jenggot Pria Satin Besar Yang Dipertebal Penutup Jenggot Penutup Jenggot Penutup Pelindung Jenggot Pabrik Penutup Jenggot')).toBeVisible({timeout: 8000});
});