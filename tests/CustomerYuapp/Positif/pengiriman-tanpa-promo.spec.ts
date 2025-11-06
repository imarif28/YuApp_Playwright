import { test, expect } from '@playwright/test';
import { CustomerPage } from '../../../pages/CustomerPage';

    // Nama produk yang dibeli (bisa penggalan kata, case-insensitive) Tas Persegi Kecil Gaya Korea, Lintas Batas Tas
    const nama_barang = process.env.BARANG || 'Lintas Batas Tas';
    // Pilih jalur pengiriman yang diinginkan Customer ('Udara' atau 'Laut')
    const jalur_pengiriman = process.env.JALUR || 'Udara';
    // Nama bank untuk metode pembayaran (bisa penggalan kata, case-insensitive, misal: 'PERMATA' untuk 'VA_PERMATA')
    const nama_bank = process.env.BANK ||  'PERMATA';

    test('Pilih pengiriman tidak menggunakan promo', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);

        await customerPage.navigateToTransactionList();
        await customerPage.selectShippingForOrder(nama_barang);
        await customerPage.chooseShippingAndPaymentWithoutPromo(jalur_pengiriman, nama_bank);
        await customerPage.verifyPaymentPage(nama_bank);
    });
