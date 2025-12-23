import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';
import { adminData } from '../../../../data/adminData';

    // --- Variabel Data Tes ---

    // Link sub banner yang akan di cari
    const sub_banner_url = process.env.URL_SBANNER || adminData.subBanner.url;

    test('Admin berhasil menghapus sub banner', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        
        await adminPage.deleteSubBanner(sub_banner_url);
        await adminPage.verifysuccessNotification();
        await adminPage.verifyBannerDeleted(sub_banner_url);
    });

