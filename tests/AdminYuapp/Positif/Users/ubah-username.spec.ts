import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';
import { adminData } from '../../../../data/adminData';

    // --- Variabel Data Tes ---

    // Data untuk Tambah User
    const newUserData = {
        username: process.env.USER || adminData.newUserData.username                    // User yang di cari
    };

    const username_baru = process.env.USER_BARU || adminData.updateUser.username;       // Username baru yang telah di ubah

    test('Admin berhasil mengubah username user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page); 

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.editUser(newUserData.username, { username: username_baru });
        await adminPage.verifysuccessNotification();
        await adminPage.verifyEditUser(username_baru, { username: username_baru });
    });
