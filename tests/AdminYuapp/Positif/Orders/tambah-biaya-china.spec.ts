import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';
import { adminData } from '../../../../data/adminData';

    // --- Variabel Data Tes ---

    // Nama customer yang melakukan pembelian (untuk pencarian di dashboard admin/marketing/finance)
    const customer_name = process.env.CUSTOMER || adminData.targetCustomerName;
    // Biaya tambahan di China
    const costs_china = process.env.BIAYA_CHINA || adminData.costsCina;

    test('Menambahkan biaya tambahan Indonesia', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.addAdditionalCostsChina(customer_name, costs_china);
        await adminPage.verifysuccessNotification();
        await adminPage.verifyAdditionalCostsChina(customer_name, costs_china);
    });
