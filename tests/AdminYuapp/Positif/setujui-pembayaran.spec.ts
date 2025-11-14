import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import { AdminPage } from '../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Nama customer yang melakukan pembelian (untuk pencarian di dashboard admin/marketing/finance)
    const customer_name = process.env.CUSTOMER || 'Ilham Muhammad Arif';

    // Path relatif ke file bukti pembayaran yang akan diupload oleh Finance
    const gambar = process.env.GAMBAR || 'dimasganteng.png';
    const filePath = `gambar/${gambar}`;
 
    test('Menyetujui pembayaran', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.FINANCE_USERNAME!, process.env.FINANCE_PASSWORD!);

        await adminPage.uploadAndApproveManualPayment(customer_name, filePath);
        await adminPage.verifysuccessNotification();
    });
