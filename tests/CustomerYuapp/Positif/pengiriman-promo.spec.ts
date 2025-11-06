import { test, expect } from '@playwright/test';
import { CustomerPage } from '../../../pages/CustomerPage';

    // Nama produk yang dibeli (bisa penggalan kata, case-insensitive) Tas Persegi Kecil Gaya Korea, Lintas Batas Tas
    const nama_barang = process.env.BARANG || 'Lintas Batas Tas';
    // Pilih jalur pengiriman yang diinginkan Customer ('Udara' atau 'Laut')
    const jalur_pengiriman = process.env.JALUR || 'Udara';
    // Nama promo yang belum di pakai
    const nama_promo = process.env.PROMO || 'YUKYUAPP';
    // Nama bank untuk metode pembayaran (bisa penggalan kata, case-insensitive, misal: 'PERMATA' untuk 'VA_PERMATA')
    const nama_bank = process.env.BANK || 'PERMATA';

    test('Pilih pengiriman menggunkan promo', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);

        await customerPage.navigateToTransactionList();
        await customerPage.selectShippingForOrder(nama_barang);
        await customerPage.chooseShippingAndPaymentPromo(jalur_pengiriman, nama_bank, nama_promo);
        await customerPage.verifyPaymentPage(nama_bank);
    });
