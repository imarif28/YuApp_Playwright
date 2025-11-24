import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Data untuk Tambah User
    const newUserData = {
        nama: process.env.NAMA || 'test1',                      // Nama yang di cari
    };

    const username_baru = process.env.USER_BARU || 'ubah1';     // Username baru yang telah di ubah

    test('Admin berhasil mengubah username user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page); 

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.editUsername(newUserData.nama, username_baru);
        await adminPage.verifysuccessNotification();
    });
