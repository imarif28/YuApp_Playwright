import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';
import { adminData } from '../../../../data/adminData';

    // --- Variabel Data Tes ---

    // Nama customer yang melakukan pembelian (untuk pencarian di dashboard admin/marketing/finance)
    const customer_name = process.env.CUSTOMER || adminData.targetCustomerName;
    // Id value akun marketing yang akan ditugaskan oleh Admin ('90' untuk Audy, '91' untuk Garda, '97' untuk Marketing, '1614' untuk IlhamMarketing)
    const id_marketing = process.env.MARKETING || adminData.marketingValueForEdit;


    test('Mengubah akun marketing yang akan ditugaskan', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        await adminPage.assignMarketing(customer_name, id_marketing);
        await adminPage.verifysuccessNotification();
        await adminPage.verifyAssignedMarketing(customer_name, id_marketing);
    });

