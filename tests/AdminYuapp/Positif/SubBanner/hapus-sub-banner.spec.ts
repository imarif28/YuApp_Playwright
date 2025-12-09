import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Link tujuan saat sub banner diklik
    const sub_banner_url = process.env.URL_SBANNER || 'https://www.instagram.com/__dimasim/';

    test('Admin berhasil menghapus sub banner', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        
        await adminPage.deleteSubBanner(sub_banner_url);
        await adminPage.verifysuccessNotification();
        await adminPage.verifyBannerDeleted(sub_banner_url);
    });

