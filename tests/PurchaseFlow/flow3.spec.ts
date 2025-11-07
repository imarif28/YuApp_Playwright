import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { AdminPage } from '../../pages/AdminPage';

test.describe('Purchase Flow Approve', () => {
    // --- Variabel Data Tes ---

    // Nama customer yang melakukan pembelian (untuk pencarian di dashboard admin/marketing/finance)
    const customer_name = 'Ilham Muhammad Arif';

    test('Marketing berhasil mengubah status order menjadi Menunggu pembayaran', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.MARKETING_USERNAME!, process.env.MARKETING_PASSWORD!);
        await adminPage.updateStatusToAwaitingPayment(customer_name);
    });

});