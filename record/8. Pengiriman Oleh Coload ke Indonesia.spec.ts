import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://eva.noretest.com/');
  await page.getByRole('textbox', { name: 'Username' }).fill('IlhamYuAPP');
  await page.getByRole('textbox', { name: 'Password' }).fill('IlhamYuAPP');
  await page.getByRole('button', { name: 'Sign in ' }).click();
  await page.locator('.nav-item-submenu:has-text("Tracking") .nav-group-sub').evaluate((el) => {
    (el as HTMLElement).style.display = 'block';
  });
  await expect(page.getByRole('link', { name: ' Deliveries By Coload (Air)' })).toBeVisible();
  await page.getByRole('link', { name: ' Deliveries By Coload (Air)' }).click();
  const shipping_mark = 'CB521321';
  const orderRow = page.locator('tr').filter({ hasText: shipping_mark });
  await expect(orderRow).toBeVisible();
  await orderRow.locator('#delivercoload').click();
  await expect(page.locator('#btn-deliver')).toBeEnabled();
  await page.locator('#btn-deliver').click();
  await expect(page.locator('.brighttheme-success').first()).toBeVisible();
});
