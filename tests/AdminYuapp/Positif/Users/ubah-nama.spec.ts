import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Data untuk Tambah User
    const newUserData = {
        nama: process.env.NAMA || 'test1',                      // Nama yang di cari
    };

    const nama_baru = process.env.NAMA_BARU || 'ubah1';         // Nama baru yang telah di ubah

    test('Admin berhasil mengubah nama user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page); 

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.editName(newUserData.nama, nama_baru);
        await adminPage.verifysuccessNotification();
    });
