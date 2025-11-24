import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Data untuk Tambah User
    const newUserData = {
        nama: process.env.NAMA || 'test1',                      // Nama yang di cari
    };

    const password_baru = process.env.PASS_BARU || '666';       // Password baru yang telah di ubah

    test('Admin berhasil mengubah password user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page); 

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.editPassword(newUserData.nama, password_baru);
        await adminPage.verifysuccessNotification();
    });
