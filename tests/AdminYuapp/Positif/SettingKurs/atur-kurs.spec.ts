import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';
import { adminData } from '../../../../data/adminData';

    // --- Variabel Data Tes ---

    // Variabel untuk Rate Yuan
    
    const rate_yuan = adminData.rateYuan;
    
    test('Admin berhasil mengubah Rate Yuan', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        
        await adminPage.updateYuanRate(rate_yuan);
        await adminPage.verifysuccessNotification();
        await adminPage.verifyYuanRateValue(rate_yuan);
    });
