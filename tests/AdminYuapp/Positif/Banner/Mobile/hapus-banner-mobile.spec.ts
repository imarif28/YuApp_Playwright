import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../../pages/LoginPage';
import { AdminPage } from '../../../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Link tujuan banner (disediakan jika diperlukan untuk validasi)
    const banner_mobile_url = process.env.URL_BANNER || 'https://www.instagram.com/__dimasim/';

    test('Admin berhasil menghapus banner mobile', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        
        await adminPage.deleteMobileBanner(banner_mobile_url);
        await adminPage.verifysuccessNotification();
        await adminPage.verifyBannerDeleted(banner_mobile_url);
    });

