import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { AdminPage } from '../../pages/AdminPage';

test.describe('Purchase Flow Approve', () => {
    // --- Variabel Data Tes ---

    // Nama customer yang melakukan pembelian (untuk pencarian di dashboard admin/marketing/finance)
    const customer_name = 'Ilham Muhammad Arif';
    
    // Path relatif ke file bukti pembayaran yang akan diupload oleh Finance
    const filePath = 'gambar/dimasganteng.png';

    test('Finance berhasil menyetujui pembayaran', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.FINANCE_USERNAME!, process.env.FINANCE_PASSWORD!);

        await adminPage.uploadAndApproveManualPayment(customer_name, filePath);
        await adminPage.verifysuccessNotification();
    });

});