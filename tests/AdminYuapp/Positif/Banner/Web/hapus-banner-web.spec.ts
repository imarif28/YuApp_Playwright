import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../../pages/LoginPage';
import { AdminPage } from '../../../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Link tujuan banner yang ingin dihapus (digunakan untuk mencari baris banner)
    const banner_url = process.env.URL_BANNER || 'https://www.instagram.com/__dimasim/'
    
    test('Admin berhasil menghapus banner web', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        
        await adminPage.deleteWebBanner(banner_url);
        await adminPage.verifysuccessNotification();
    });
