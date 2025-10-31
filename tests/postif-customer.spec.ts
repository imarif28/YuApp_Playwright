import { test, expect } from '@playwright/test';
import { CustomerPage } from '../pages/CustomerPage';


    // --- Variabel Data Tes ---

    // Nama produk yang dibeli (bisa penggalan kata, case-insensitive) Tas Persegi Kecil Gaya Korea, Lintas Batas Tas
    const nama_barang = 'Lintas Batas Tas';
    // Pilih jalur pengiriman yang diinginkan Customer ('Udara' atau 'Laut')
    const jalur_pengiriman = 'Laut';
    // Nama promo yang belum di pakai
    const nama_promo = 'YUKYUAPP';
    // Nama bank untuk metode pembayaran (bisa penggalan kata, case-insensitive, misal: 'PERMATA' untuk 'VA_PERMATA')
    const nama_bank = 'PERMATA';
    // Nomor lokal China yang diinput oleh Admin

    test('Menambah item di keranjang', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);
        await customerPage.addProductToCart(nama_barang);
    });

    test('Pesan item di keranjang ', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);
        await customerPage.checkoutProduct(nama_barang);
        await customerPage.createOrder();
    });

    test('Melakukan pembelian', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);
        await customerPage.addProductToCart(nama_barang);
        await customerPage.checkoutProduct(nama_barang);
        await customerPage.createOrder();
    });

    test('Menghapus item di keranjang', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);
        await customerPage.deleteProduct(nama_barang);
    });

    test('Detail Transaksi', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);

        await customerPage.navigateToTransactionList();
        await customerPage.transactionDetailForOrder(nama_barang);
        await customerPage.verifyProductName(nama_barang);
    });

    test('Pilih pengiriman menggunkan promo', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);

        await customerPage.navigateToTransactionList();
        await customerPage.selectShippingForOrder(nama_barang);
        await customerPage.chooseShippingAndPaymentPromo(jalur_pengiriman, nama_bank, nama_promo);
        await customerPage.verifyPaymentPage(nama_bank);
    });

    test('Pilih pengiriman tidak menggunakan promo', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);

        await customerPage.navigateToTransactionList();
        await customerPage.selectShippingForOrder(nama_barang);
        await customerPage.chooseShippingAndPaymentWithoutPromo(jalur_pengiriman, nama_bank);
        await customerPage.verifyPaymentPage(nama_bank);
    });
