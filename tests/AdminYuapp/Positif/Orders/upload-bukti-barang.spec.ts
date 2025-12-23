import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';
import { adminData } from '../../../../data/adminData';

    // --- Variabel Data Tes ---

    // Nama customer yang melakukan pembelian (untuk pencarian di dashboard admin/marketing/finance)
    const customer_name = process.env.CUSTOMER || adminData.targetCustomerName;

    // Path relatif ke file bukti barang yang akan diupload oleh Admin
    const gambar = process.env.GAMBAR || adminData.filePathBuktiBarang;
    const filePath = `gambar/${gambar}`;
 
    test('Mengupload Bukti Barang', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.uploadProofOfGoods(customer_name, filePath);
        await adminPage.verifysuccessNotification();
    });
