import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';
import { adminData } from '../../../../data/adminData';

    // --- Variabel Data Tes ---

    const newUserData = {
        username: process.env.USER || adminData.newUserData.username            // User yang di cari
    };

    const phone_baru = process.env.TELP_BARU || adminData.updateUser.phone;     // Phone baru yang telah di ubah

    test('Admin berhasil mengubah phone user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page); 

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.editUser(newUserData.username, { phone: phone_baru });
        await adminPage.verifysuccessNotification();
        await adminPage.verifyEditUser(newUserData.username, { phone: phone_baru });
    });
