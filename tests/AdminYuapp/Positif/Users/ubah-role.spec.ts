import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Data untuk Tambah User
    const newUserData = {
        nama: process.env.NAMA || 'ubah1',                      // Nama yang di cari
    };

    const role_baru = process.env.ROLE_BARU || '20';            // Role baru yang telah di ubah

    test('Admin berhasil mengubah role user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page); 

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.editRole(newUserData.nama, role_baru);
        await adminPage.verifysuccessNotification();
    });
