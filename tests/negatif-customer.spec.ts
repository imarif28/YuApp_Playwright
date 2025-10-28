import { test, expect } from '@playwright/test';
import { CustomerPage } from '../pages/CustomerPage';

test.describe('Flow Negtaif Customer', () => {
    // --- Variabel Data Tes ---

    // Nama produk yang dibeli (bisa penggalan kata, case-insensitive)
    const nama_barang = 'Tas Persegi Kecil Gaya Korea';
    // Nama customer yang melakukan pembelian (untuk pencarian di dashboard admin/marketing/finance)

    // Pilih jalur pengiriman yang diinginkan Customer ('Udara' atau 'Laut')
    const jalur_pengiriman = 'Laut';
    // Nama bank untuk metode pembayaran (bisa penggalan kata, case-insensitive, misal: 'PERMATA' untuk 'VA_PERMATA')
    const nama_bank = 'PERMATA';
    // Nomor lokal China yang diinput oleh Admin

    test('Pembelian di bawah Minimal', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);
        await customerPage.addProductToCart(nama_barang);
        await customerPage.checkoutProduct(nama_barang);
        await customerPage.createOrderUnder();
    });

    test('Customer berhasil memilih metode pengiriman dan pembayaran', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);

        await customerPage.navigateToTransactionList();
        await customerPage.selectShippingForOrder();
        await customerPage.chooseShippingAndPayment(jalur_pengiriman, nama_bank);
        await customerPage.verifyPaymentPage(nama_bank);
    });
});