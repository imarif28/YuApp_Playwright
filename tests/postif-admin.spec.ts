import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { AdminPage } from '../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Nama customer yang melakukan pembelian (untuk pencarian di dashboard admin/marketing/finance)
    const customer_name = 'Ilham Muhammad Arif';
    // Nama akun marketing yang akan ditugaskan oleh Admin
    const nama_marketing = 'IlhamMarketing';

    // Nomor lokal China yang diinput oleh Admin
    const no_local_china = '8687578';
    // Path relatif ke file bukti pembayaran yang akan diupload oleh Finance
    const filePath = 'dimasganteng.png';

    test('Mengubah status order menjadi pengiriman', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        await adminPage.adjustShippingPrice(customer_name, nama_marketing);
    });

    test('Mengubah status order menjadi Menunggu pembayaran', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.MARKETING_USERNAME!, process.env.MARKETING_PASSWORD!);
        await adminPage.marketingUpdateStatusToAwaitingPayment(customer_name);
    });

    test('Menyetujui pembayaran', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.FINANCE_USERNAME!, process.env.FINANCE_PASSWORD!);

        await adminPage.financeApprovePayment(customer_name, filePath);
    });

    test('Menginput nomor lokal China', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.adminInputLocalChinaNumber(customer_name, no_local_china);
    });
