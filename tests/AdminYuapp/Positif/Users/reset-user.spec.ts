import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Data untuk Reset User
    const resetUserData = {
        username: process.env.USER || 'test',                   // Username untuk akun baru yang akan dibuat
        password: process.env.PASS || '123',                    // Password untuk akun baru
        nama: process.env.NAMA || 'test1',                      // Nama lengkap pengguna untuk akun baru
        email: process.env.EMAIL || 'test1@contoh.com',         // Alamat email untuk akun baru   
        phone: process.env.TELP || '628888888888',              // Nomor telepon untuk akun baru
        roleValue: process.env.ROLE || '1'                      // ID Role untuk akun baru ('1' untuk Admin, '2' untuk Finance, '5' untuk Manager, '20' untuk Marketing, '30' untuk Agen Cina, '40' untuk Finance, dan '60' untuk Content Creator.)
    };

    const username_baru = process.env.USER_BARU || 'ubah1';     // Username baru yang telah di ubah

    test('Admin berhasil reset user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.editUser(username_baru, resetUserData);
        await adminPage.verifysuccessNotification();
        await adminPage.verifyEditUser(resetUserData.nama, resetUserData);
    });
