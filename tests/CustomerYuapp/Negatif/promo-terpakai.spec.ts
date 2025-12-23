import { test, expect } from '@playwright/test';
import { CustomerPage } from '../../../pages/CustomerPage';
import { customerData } from '../../../data/customerData';

     // Nama produk yang dibeli (bisa penggalan kata, case-insensitive) Tas Persegi Kecil Gaya Korea, Lintas Batas Tas
    const nama_barang = process.env.BARANG || customerData.namaBarang;
    // Nama promo yang sudah di pakai
    const promo_terpakai = 'PROMOJUNE'
    // Pilih jalur pengiriman yang diinginkan Customer ('Udara' atau 'Laut')
    const jalur_pengiriman = process.env.PENGIRIMAN || 'Laut';
    // Nama bank untuk metode pembayaran (bisa penggalan kata, case-insensitive, misal: 'PERMATA' untuk 'VA_PERMATA')
    const nama_bank = process.env.BANK || 'PERMATA';

    test('Pilih pengiriman menggunkan promo terpakai', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);

        await customerPage.navigateToTransactionList();
        await customerPage.selectShippingForOrder(nama_barang);
        await customerPage.chooseShippingAndPaymentPromo(jalur_pengiriman, nama_bank, promo_terpakai);
        await customerPage.errorPaymentPromoPage();
    });
