import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../../pages/LoginPage';
import { AdminPage } from '../../../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Link tujuan saat banner diklik (misal: link Instagram atau halaman promo)
    const banner_url = process.env.URL_BANNER || 'https://www.instagram.com/__dimasim/';

    // Nomor urutan tampilan banner pada halaman website
    const banner_order = process.env.URUTAN || '6';

    // Nama file gambar banner yang tersimpan di folder 'gambar/'
    const gambar = process.env.GAMBAR_BANNER || 'baner.png';
    const filePath = `gambar/${gambar}`;

    test('Admin berhasil menambah banner web', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        
        await adminPage.addWebBanner(banner_url, banner_order, filePath);
        await adminPage.verifysuccessNotification();
    });

