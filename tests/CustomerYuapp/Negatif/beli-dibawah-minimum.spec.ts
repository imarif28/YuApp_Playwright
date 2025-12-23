import { test, expect } from '@playwright/test';
import { CustomerPage } from '../../../pages/CustomerPage';

    // Nama produk yang dibeli (bisa penggalan kata, case-insensitive)
    const nama_barang = 'Grosir pengisi daya mobil 15W';

    test('Pembelian dibawah Minimal', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);
        await customerPage.addProductToCart(nama_barang);
        await customerPage.checkoutProduct(nama_barang);
        await customerPage.createOrderUnder();
    });
