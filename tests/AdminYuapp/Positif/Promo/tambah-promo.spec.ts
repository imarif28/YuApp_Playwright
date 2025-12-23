import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';
import { adminData } from '../../../../data/adminData';

    // --- Variabel Data Tes ---

    // Data untuk Tambah Promo
    const promo_data = {
        method: process.env.METHOD_PROMO || adminData.promo.method,
        code: process.env.PROMO || adminData.promo.code,
        description: process.env.DESC_PROMO || adminData.promo.description,
        percentage: process.env.PERSEN_PROMO || adminData.promo.percentage,
        maxDiscount: process.env.MAX_PROMO || adminData.promo.maxDiscount,
        minPurchase: process.env.MIN_PROMO || adminData.promo.minPurchase,
        type: process.env.TIPE_PROMO || adminData.promo.type,
        isEvent: process.env.IS_EVENT || adminData.promo.isEvent
    };

    test('Admin berhasil menambah promo', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.addPromo(promo_data.code, promo_data);
        await adminPage.verifysuccessNotification();
        await adminPage.verifyPromoCreated(promo_data.code, promo_data);
    });
