import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Data untuk Tambah Promo
    const promo_data = {
        code: process.env.PROMO || 'dimas',
        description: process.env.DESC_PROMO || 'Dibuat Melalui Playwright',
        percentage: process.env.PERSEN_PROMO || '12',
        maxDiscount: process.env.MAX_PROMO || '200000',
        minPurchase: process.env.MIN_PROMO || '120000',
        isEvent: process.env.IS_EVENT || '0'
    };

    test('Admin berhasil menambah promo', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.addPromo(promo_data);
        await adminPage.verifysuccessNotification();
    });
