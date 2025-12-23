import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../../pages/LoginPage';
import { AdminPage } from '../../../../../pages/AdminPage';
import { adminData } from '../../../../../data/adminData';

    // --- Variabel Data Tes ---

    // Link tujuan saat banner diklik
    const banner_url = process.env.URL_BANNER || adminData.banner.urlWeb;

    // Nomor urutan tampilan banner pada halaman website
    const banner_order = process.env.URUTAN || adminData.banner.orderWeb;

    // Nama file gambar banner yang tersimpan di folder 'gambar/'
    const gambar = process.env.GAMBAR_BANNER || adminData.banner.filePathWeb;
    const filePath = `gambar/${gambar}`;

    test('Admin berhasil menambah banner web', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        
        await adminPage.addWebBanner(banner_url, banner_order, filePath);
        await adminPage.verifysuccessNotification();
        await adminPage.verifyBannerExists(banner_url);
    });

