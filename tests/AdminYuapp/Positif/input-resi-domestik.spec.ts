import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import { AdminPage } from '../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Nama customer yang melakukan pembelian (untuk pencarian di dashboard admin/marketing/finance)
    const customer_name = process.env.CUSTOMER || 'Ilham Muhammad Arif';

    // Nomor resi domestic yang diinput oleh Admin
    const no_resi_domestic = process.env.RESI_DOM || '124112435U4346';

    test('Menginput nomor resi domestik', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.inputDomesticTrackingNumber(customer_name, no_resi_domestic);
        await adminPage.verifysuccessNotification();
    });
