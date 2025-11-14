import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import { AdminPage } from '../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Nama customer yang melakukan pembelian (untuk pencarian di dashboard admin/marketing/finance)
    const customer_name = process.env.CUSTOMER || 'Ilham Muhammad Arif';

    // Data lengkap untuk pengisian form 'Edit Invoice'
    const invoiceData = {
        seaCategoryValue: process.env.KURIR_SEA || '3',     // Kategori Biaya Laut (Value '3' = BB - SEA - 100.000,00)
        panjang: process.env.PANJANG || '10',               // Dimensi barang (Panjang)
        lebar: process.env.LEBAR || '10',                   // Dimensi barang (Lebar)
        tinggi: process.env.TINGGI || '10',                 // Dimensi barang (Tinggi)
        airCategoryValue: process.env.KURIR_AIR || '4',     // Kategori Biaya Udara (Value '4' = CC - AIR - 50.000,00)
        berat: process.env.BERAT || '10'                    // Berat barang
    };

    test('Mengedit data invoice', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        
        await adminPage.editInvoice(customer_name, invoiceData);
        await adminPage.verifysuccessNotification();
    });
