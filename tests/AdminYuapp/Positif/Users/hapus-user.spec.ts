import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Data untuk Tambah User
    const newUserData = {
        nama: process.env.NAMA || 'test1',                 // Nama lengkap pengguna untuk akun baru
    };

    test('Admin berhasil menghapus user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        
        // Menghapus user yang baru saja dibuat di tes sebelumnya
        await adminPage.deleteUser(newUserData.nama);
        await adminPage.verifysuccessNotification();
    });
