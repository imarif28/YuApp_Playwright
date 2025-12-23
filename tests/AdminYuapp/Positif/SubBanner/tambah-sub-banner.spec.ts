import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';
import { adminData } from '../../../../data/adminData';

    // --- Variabel Data Tes ---

    // Link tujuan saat sub banner diklik
    const sub_banner_url = process.env.URL_SBANNER || adminData.subBanner.url;

    // Posisi tampilan sub banner
    const sub_banner_position = process.env.POSISI || adminData.subBanner.position;

    // Nama file gambar sub banner yang tersimpan di folder 'gambar/'
    const gambar = process.env.GAMBAR_SBANNER || adminData.subBanner.filePath;
    const filePath = `gambar/${gambar}`;

    test('Admin berhasil menambah sub banner', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.addSubBanner(sub_banner_url, sub_banner_position, filePath);
        await adminPage.verifysuccessNotification();
        await adminPage.verifyBannerExists(sub_banner_url);
    });

