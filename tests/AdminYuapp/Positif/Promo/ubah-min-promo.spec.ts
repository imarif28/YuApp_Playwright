import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Data untuk Tambah Promo
    const promo_data = {
        code: process.env.PROMO || 'dimas',
    };

    const min_promo_baru = process.env.MIN_PROMO_BARU || '100000';

    test('Admin berhasil mengubah minimal pembelian promo', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        
        await adminPage.editPromo(promo_data.code, { minPurchase: min_promo_baru });
        await adminPage.verifysuccessNotification();
    });