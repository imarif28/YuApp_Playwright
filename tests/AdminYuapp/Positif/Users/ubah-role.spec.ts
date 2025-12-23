import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';
import { adminData } from '../../../../data/adminData';

    // --- Variabel Data Tes ---

    const newUserData = {
        username: process.env.USER || adminData.newUserData.username                // User yang di cari
    };

    const role_baru = process.env.ROLE_BARU || adminData.updateUser.roleValue;      // Role baru yang telah di ubah

    test('Admin berhasil mengubah role user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page); 

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.editUser(newUserData.username, { roleValue: role_baru });
        await adminPage.verifysuccessNotification();
        await adminPage.verifyEditUser(newUserData.username, { roleValue: role_baru });
    });
