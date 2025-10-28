import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://eva.noretest.com/');
  await page.getByRole('textbox', { name: 'Username' }).fill('IlhamYuAPP');
  await page.getByRole('textbox', { name: 'Password' }).fill('IlhamYuAPP');
  await page.getByRole('button', { name: 'Sign in ' }).click();

  // Navigasi ke Receipt
  await page.locator('.nav-item-submenu:has-text("Tracking") .nav-group-sub').evaluate((el) => {
    (el as HTMLElement).style.display = 'block';
  });
  await expect(page.getByRole('link', { name: ' Receipt' })).toBeVisible();
  await page.getByRole('link', { name: ' Receipt' }).click();
  await page.getByRole('link', { name: 'NEW RECEIPT' }).click();

  // Isi form receipt
  await expect(page).toHaveURL('https://eva.noretest.com/receipt/create');
  await page.locator('#no_local_cina').fill('567');
  await page.locator('#shipping_mark').fill('CVCV');
  await page.getByRole('combobox', { name: 'COLOAD' }).click();
  await page.getByRole('treeitem', { name: 'Yuapp' }).click();
  await expect(page.getByRole('combobox', { name: 'Marketing YUAPP', exact: true })).toBeVisible();
  await page.getByLabel('Udara').check();

  // Tambah barang
  await expect(page.locator('#btnaddgood')).toBeEnabled();
  await page.locator('#btnaddgood').click();

  await page.locator('#panjang').fill('10');
  await page.locator('#panjang').press('Tab');
  await page.locator('#lebar').fill('10');
  await page.locator('#lebar').press('Tab');
  await page.locator('#tinggi').fill('10');
  await page.locator('#tinggi').press('Tab');
  await page.locator('#berat').fill('10');
  await page.locator('#berat').press('Tab');
  await page.locator('#total_ctn').fill('1');
  await page.locator('#total_ctn').press('Tab');

  await page.locator('#deskripsi').fill(
    'Kantong pelatihan olahraga lintas-batas Tas Silindris Kantong Renang Pemisahan Kering dan Basah Logo Kustom Kustom Tas Nylon Tanah Nylon'
  );
  await page.locator('#deskripsi').press('Tab');

  await page.locator('#tipe_ekspedisi').selectOption({ label: 'UDARA - ALL CATEGORIES' });

  // Tunggu tombol Submit aktif lalu klik
  await expect(page.locator('#tambahbarang')).toBeEnabled()
  await page.locator('#tambahbarang').click();

  // Verifikasi barang berhasil disimpan
  await expect(page.locator('.brighttheme-success')).toBeVisible();

  // Submit receipt 
  await page.locator('#btnsubmitreceipt').click();
  await expect(page.locator('.brighttheme-success').first()).toBeVisible();
});
