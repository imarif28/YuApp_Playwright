import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../../pages/LoginPage';
import { AdminPage } from '../../../../pages/AdminPage';
import { adminData } from '../../../../data/adminData';

    // --- Variabel Data Tes ---

    // Nama customer yang melakukan pembelian
    const customer_name = process.env.CUSTOMER || adminData.targetCustomerName;

    // Data lengkap untuk pengisian form 'Edit Invoice'
    const invoiceData = {
        seaCategoryValue: process.env.KURIR_SEA || adminData.invoiceData.seaCategoryValue,      // Kategori Biaya Laut (Value '3' = BB - SEA - 100.000,00)
        panjang: process.env.PANJANG || adminData.invoiceData.panjang,                          // Dimensi barang (Panjang)
        lebar: process.env.LEBAR || adminData.invoiceData.lebar,                                // Dimensi barang (Lebar)
        tinggi: process.env.TINGGI || adminData.invoiceData.tinggi,                             // Dimensi barang (Tinggi)
        airCategoryValue: process.env.KURIR_AIR || adminData.invoiceData.airCategoryValue,      // Kategori Biaya Udara (Value '4' = CC - AIR - 50.000,00)
        berat: process.env.BERAT || adminData.invoiceData.berat                                 // Berat barang
    };

    test('Mengedit data invoice', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.editInvoice(customer_name, invoiceData);
        await adminPage.verifysuccessNotification();
        await adminPage.verifyEditInvoice(customer_name, invoiceData);
    });
