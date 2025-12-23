import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';
import { adminData } from '../../../../data/adminData';

    // --- Variabel Data Tes ---

    const newUserData = {
        user: process.env.NAMA || adminData.newUserData.username        // User yang di cari
    };

    test('Admin berhasil menghapus user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.deleteUser(newUserData.user);
        await adminPage.verifysuccessNotification();
        await adminPage.verifyUserDeleted(newUserData.user);
    });
