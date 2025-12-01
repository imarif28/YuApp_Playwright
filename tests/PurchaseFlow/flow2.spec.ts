import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { AdminPage } from '../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Nama customer yang melakukan pembelian (untuk pencarian di dashboard admin/marketing/finance)
    const customer_name = 'Ilham Muhammad Arif';
    // Nama akun marketing yang akan ditugaskan oleh Admin
    const nama_marketing = '1614';

    test('Admin berhasil mengubah status back office menjadi pengiriman', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        await adminPage.applyShippingAdjustment(customer_name, nama_marketing);
        await adminPage.verifysuccessNotification();
    });
