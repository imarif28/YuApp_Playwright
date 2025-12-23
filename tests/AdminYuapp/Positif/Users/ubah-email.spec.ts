import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';
import { adminData } from '../../../../data/adminData';

    // --- Variabel Data Tes ---

    const newUserData = {
        username: process.env.USER || adminData.newUserData.username                // User yang di cari
    };

    const email_baru = process.env.EMAIL_BARU || adminData.updateUser.email;        // Email baru yang telah di ubah

    test('Admin berhasil mengubah email user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page); 

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.editUser(newUserData.username, { email: email_baru });
        await adminPage.verifysuccessNotification();
        await adminPage.verifyEditUser(newUserData.username, { email: email_baru });
    });
