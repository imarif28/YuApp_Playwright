import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Nama customer yang melakukan pembelian (untuk pencarian di dashboard admin/marketing/finance)
    const customer_name = process.env.CUSTOMER || 'Ilham Muhammad Arif';
    // Pilih kurir yang ada di Indonesia ('JNE', 'J&T Cargo/Sentral Cargo')
    const kurir_domestik = process.env.KURIR || '1';

    test('Memilih kurir domestik JNE', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        await adminPage.selectDomesticCourier(customer_name,kurir_domestik);
        await adminPage.verifysuccessNotification();
    });

