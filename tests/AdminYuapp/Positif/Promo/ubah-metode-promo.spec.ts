import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';
import { adminData } from '../../../../data/adminData';

    // --- Variabel Data Tes ---

    // Code Promo yang di cari
    const promo_data = {
        code: process.env.PROMO || adminData.promo.code,
    };

    const metode_promo_baru = process.env.METHOD_PROMO_BARU || adminData.updatePromo.method;

    test('Admin berhasil mengubah metode promo', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        
        await adminPage.editPromo(promo_data.code, { method: metode_promo_baru });
        await adminPage.verifysuccessNotification();
        await adminPage.verifyEditPromo(promo_data.code, { method: metode_promo_baru });
    });
