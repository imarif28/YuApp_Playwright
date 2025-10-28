import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://eva.noretest.com/');
  await page.getByRole('textbox', { name: 'Username' }).fill('IlhamYuAPP');
  await page.getByRole('textbox', { name: 'Password' }).fill('IlhamYuAPP');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.locator('.nav-item-submenu:has-text("Tracking") .nav-group-sub').evaluate((el) => {
    (el as HTMLElement).style.display = 'block';
  });
  await page.getByRole('link', { name: ' Warehouse Indonesia' }).click();
  await page.getByRole('combobox', { name: '-- Choose Shipping --' }).click();
  await page.getByRole('treeitem', { name: '(Direct)' }).click();
  await page.locator('#btn_shipping').click();
  await expect(page.locator('#DataTables_Table_0_filter')).toBeVisible();
  const shipping_mark = 'PAP1';
  await page.getByRole('searchbox', { name: 'Filter' }).fill(shipping_mark);
  await expect(page.locator('tbody tr', { hasText: shipping_mark })).toBeVisible();
  await page.locator('tbody tr', { hasText: shipping_mark }).getByTitle('Selesaikan Resi').click();
  await expect(page.locator('#wareindotodoneform')).toBeVisible();
  await page.getByRole('button', { name: 'Ya, Selesaikan' }).click();
  await expect(page.locator('.brighttheme-success').first()).toBeVisible();
});