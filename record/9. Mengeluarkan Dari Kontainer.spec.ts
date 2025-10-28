import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://eva.noretest.com/');
    await page.getByRole('textbox', { name: 'Username' }).fill('IlhamYuAPP');
    await page.getByRole('textbox', { name: 'Password' }).fill('IlhamYuAPP');
    await page.getByRole('button', { name: 'Sign in ' }).click();
    await page.locator('.nav-item-submenu:has-text("Tracking") .nav-group-sub').evaluate((el) => {
        (el as HTMLElement).style.display = 'block';
    });
    await page.getByRole('link', { name: ' Unstuffing Indonesia' }).click();
    await page.getByRole('link', { name: 'UNSTUFFING CARTON' }).click();
    await page.getByLabel('Destination Port').click();
    await page.getByRole('treeitem', { name: '(Direct)' }).click();
    await page.waitForLoadState('networkidle');
    await page.getByLabel('No. Container').click();
    await page.getByRole('treeitem', { name: 'COLOAD' }).click();
    await page.locator('#btn-filter').click();
    await page.locator('#btn-move-all').click();
    await expect(page.locator('#moveform')).toBeVisible();
    await page.getByRole('button', { name: 'Pindah Semua' }).click();
    await expect(page.locator('.brighttheme-success').first()).toBeVisible();
});