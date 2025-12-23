import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';
import { adminData } from '../../../../data/adminData';

    // --- Variabel Data Tes ---

    // Nama customer yang melakukan pembelian (untuk pencarian di dashboard admin/marketing/finance)
    const customer_name = process.env.CUSTOMER || adminData.targetCustomerName;

    // Nomor resi evatrack yang diinput oleh Admin
    const no_resi_evatrack = process.env.RESI_EVA || adminData.noResiEvatrack;

    test('Menginput nomor resi evatrack', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.inputEvatrackTrackingNumber(customer_name, no_resi_evatrack);
        await adminPage.verifysuccessNotification();
        await adminPage.verifyEvatrackTrackingNumber(customer_name, no_resi_evatrack);
    });
