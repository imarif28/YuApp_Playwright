import { test, expect } from '@playwright/test';
import { CustomerPage } from '../pages/CustomerPage';


    // --- Variabel Data Tes ---

    // Nama produk yang dibeli (bisa penggalan kata, case-insensitive)
    const nama_barang = 'Tas Persegi Kecil Gaya Korea';
 
    // Pilih jalur pengiriman yang diinginkan Customer ('Udara' atau 'Laut')
    const jalur_pengiriman = 'Laut';
    // Nama bank untuk metode pembayaran (bisa penggalan kata, case-insensitive, misal: 'PERMATA' untuk 'VA_PERMATA')
    const nama_bank = 'BCA';
    // Nomor lokal China yang diinput oleh Admin

    test('Pembelian di bawah Minimal', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);
        await customerPage.addProductToCart(nama_barang);
        await customerPage.checkoutProduct(nama_barang);
        await customerPage.createOrderUnder();
    });

    test('Pembayaran dengan Bank Lain', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);

        await customerPage.navigateToTransactionList();
        await customerPage.selectShippingForOrder();
        await customerPage.chooseShippingAndPayment(jalur_pengiriman, nama_bank);
        await customerPage.errorPaymentBankPage();
    });

    test('Pilih pengiriman menggunkan promo yang terpakai', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);

        await customerPage.navigateToTransactionList();
        await customerPage.selectShippingForOrder();
        await customerPage.chooseShippingAndPayment(jalur_pengiriman, nama_bank);
        await customerPage.errorPaymentPromoPage();
    });
