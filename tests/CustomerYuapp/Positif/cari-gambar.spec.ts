import { test, expect } from '@playwright/test';
import { CustomerPage } from '../../../pages/CustomerPage';
import { customerData } from '../../../data/customerData';

    // Path ke file gambar
    const gambar = process.env.GAMBAR || customerData.gambarValid;
    const pathgambar = `gambar/${gambar}`;

    test('Mencari produk berdasarkan gambar', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);
        await customerPage.searchByImage(pathgambar);
        await customerPage.verifySearchByImageSuccess();
    });

