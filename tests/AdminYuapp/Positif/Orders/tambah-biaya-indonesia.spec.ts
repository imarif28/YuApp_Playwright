import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Nama customer yang melakukan pembelian (untuk pencarian di dashboard admin/marketing/finance)
    const customer_name = process.env.CUSTOMER || 'Ilham Muhammad Arif';
    // Biaya tambahan di China
    const costs_indo = process.env.BIAYA_INDO || '5000';

    test('Menginput nomor resi evatrack', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.addAdditionalCostsIndonesia(customer_name, costs_indo);
        await adminPage.verifysuccessNotification();
    });
