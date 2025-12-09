import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Data untuk Tambah User
    const newUserData = {
        nama: process.env.NAMA || 'test1',                          // Nama yang di cari
    };

    const phone_baru = process.env.TELP_BARU || '621111111111';     // Phone baru yang telah di ubah

    test('Admin berhasil mengubah phone user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page); 

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.editUser(newUserData.nama, { phone: phone_baru });
        await adminPage.verifysuccessNotification();
        await adminPage.verifyEditUser(newUserData.nama, { phone: phone_baru });
    });
