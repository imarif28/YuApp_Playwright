import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Data untuk Tambah Promo
    const promo_data = {
        code: process.env.PROMO || 'dimas',
    };

    test('Admin berhasil mengaktifkan promo', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        
        await adminPage.activatePromo(promo_data.code);
        await adminPage.verifysuccessNotification();
    });
