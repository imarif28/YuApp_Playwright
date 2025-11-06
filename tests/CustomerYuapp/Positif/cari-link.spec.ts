import { test, expect } from '@playwright/test';
import { CustomerPage } from '../../../pages/CustomerPage';

    // Nama produk yang dibeli (bisa penggalan kata, case-insensitive) Tas Persegi Kecil Gaya Korea, Lintas Batas Tas
    // const nama_barang = process.env.NAMA_BARANG || 'Penutup Jenggot Pria Satin Besar';    
    // Url yang valid
    const url = process.env.URL || 'https://detail.1688.com/offer/631468992893.html';

    test('Mencari produk berdasarkan URL', async ({ page }) => {
        const customerPage = new CustomerPage(page);
        // const expectedProduct = 'Penutup Jenggot Pria Satin Besar ';

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);
        await customerPage.searchByLink(url);
        await customerPage.verifySearchByLinkSuccess();
    });
