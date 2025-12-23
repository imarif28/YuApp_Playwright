import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';
import { adminData } from '../../../../data/adminData';

    // --- Variabel Data Tes ---

    // Nama customer yang melakukan pembelian (untuk pencarian di dashboard admin/marketing/finance)
    const customer_name = process.env.CUSTOMER || adminData.targetCustomerName;

    // Nomor lokal China yang diinput oleh Admin
    const no_local_china = process.env.RESI || adminData.noLocalChina;

    test('Menginput nomor lokal China', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.inputLocalChinaNumber(customer_name, no_local_china);
        await adminPage.verifysuccessNotification();
        await adminPage.verifyLocalChinaNumber(customer_name, no_local_china);
    });
