import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../../pages/LoginPage';
import { AdminPage } from '../../../../../pages/AdminPage';
import { adminData } from '../../../../../data/adminData';


    // --- Variabel Data Tes ---

    // Link tujuan saat banner mobile diklik
    const banner_mobile_url = process.env.URL_BANNER || adminData.banner.urlMobile;

    // Nomor urutan tampilan banner pada aplikasi mobile
    const banner_mobile_order = process.env.URUTAN || adminData.banner.orderMobile;

    // Nama file gambar banner yang tersimpan di folder 'gambar/'
    const gambar = process.env.GAMBAR_BANNER || adminData.banner.filePathMobile;
    const filePath = `gambar/${gambar}`;

    test('Admin berhasil menambah banner mobile', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        
        await adminPage.addMobileBanner(banner_mobile_url, banner_mobile_order, filePath);
        await adminPage.verifysuccessNotification();
        await adminPage.verifyBannerExists(banner_mobile_url);
    });

