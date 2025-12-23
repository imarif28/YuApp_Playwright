import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';
import { adminData } from '../../../../data/adminData';

    // --- Variabel Data Tes ---

    const newUserData = {
        nama: process.env.NAMA || adminData.newUserData.username                // User yang di cari
    };

    const nama_baru = process.env.NAMA_BARU || adminData.updateUser.nama;       // Nama baru yang telah di ubah

    test('Admin berhasil mengubah nama user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page); 

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.editUser(newUserData.nama, { nama: nama_baru });
        await adminPage.verifysuccessNotification();
        await adminPage.verifyEditUser(nama_baru, { nama: nama_baru });
    });
