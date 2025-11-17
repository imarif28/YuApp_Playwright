import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // [BARU] Variabel untuk Rate Yuan
    const rate_yuan = '2500.00';
    
    test('Admin berhasil mengubah Rate Yuan', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        
        await adminPage.updateYuanRate(rate_yuan);
        await adminPage.verifysuccessNotification();
    });
