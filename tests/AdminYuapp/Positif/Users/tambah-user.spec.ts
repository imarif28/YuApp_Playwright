import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';
import { adminData } from '../../../../data/adminData';

    // --- Variabel Data Tes ---

    // Data untuk Tambah User
    const newUserData = {
        username: process.env.USER || adminData.newUserData.username,
        password: process.env.PASS || adminData.newUserData.password,
        nama: process.env.NAMA || adminData.newUserData.nama,
        email: process.env.EMAIL || adminData.newUserData.email,
        phone: process.env.TELP || adminData.newUserData.phone,
        roleValue: process.env.ROLE || adminData.newUserData.roleValue
    };

    test('Admin berhasil menambah user baru', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page); 

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.addNewUser(newUserData);
        await adminPage.verifysuccessNotification();
        await adminPage.verifyUserCreated(newUserData);
    });
