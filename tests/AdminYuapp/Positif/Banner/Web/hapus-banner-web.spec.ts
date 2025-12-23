import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../../pages/LoginPage';
import { AdminPage } from '../../../../../pages/AdminPage';
import { adminData } from '../../../../../data/adminData';

    // --- Variabel Data Tes ---

    // Link tujuan banner yang di cari
    const banner_url = process.env.URL_BANNER || adminData.banner.urlWeb;
    
    test('Admin berhasil menghapus banner web', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        
        await adminPage.deleteWebBanner(banner_url);
        await adminPage.verifysuccessNotification();
        await adminPage.verifyBannerDeleted(banner_url);
    });
