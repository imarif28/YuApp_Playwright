import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import { AdminPage } from '../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Nama customer yang melakukan pembelian (untuk pencarian di dashboard admin/marketing/finance)
    const customer_name = process.env.CUSTOMER || 'Ilham Muhammad Arif';

    // Nomor resi coload evatrack yang diinput oleh Admin
    const no_resi_coload = process.env.RESI_COLOAD || 'COBA1';

    test('Menginput nomor resi coload evatrack', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.inputColoadTrackingNumber(customer_name, no_resi_coload);
        await adminPage.verifysuccessNotification();
    });
