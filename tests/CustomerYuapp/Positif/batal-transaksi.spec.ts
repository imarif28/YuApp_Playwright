import { test, expect } from '@playwright/test';
import { CustomerPage } from '../../../pages/CustomerPage';
import { customerData } from '../../../data/customerData';

    // Nama produk yang dibeli (bisa penggalan kata, case-insensitive) Tas Persegi Kecil Gaya Korea, Lintas Batas Tas
    const nama_barang = process.env.BARANG || customerData.namaBarang;

    test('Batalkan Transaksi', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);

        await customerPage.navigateToTransactionList();
        await customerPage.cancelTransactionForOrder(nama_barang);
        await customerPage.verifyCancelTransaction();
    });
