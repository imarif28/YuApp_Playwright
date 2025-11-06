import { test, expect } from '@playwright/test';
import { CustomerPage } from '../../../pages/CustomerPage';

    // Path ke file gambar
    const gambar = process.env.GAMBAR || 'beard.jpg';
    const pathgambar = `gambar/${gambar}`;

    test('Mencari produk berdasarkan gambar', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);
        await customerPage.searchByImage(pathgambar);
        await customerPage.verifySearchByImageSuccess();
    });

