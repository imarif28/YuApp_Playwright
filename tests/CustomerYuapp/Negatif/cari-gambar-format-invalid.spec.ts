import { test, expect } from '@playwright/test';
import { CustomerPage } from '../../../pages/CustomerPage';

    // Path ke file dengan format tidak valid
    const gambar = process.env.GAMBAR || 'mobil.webp';
    const pathgambar = `gambar/${gambar}`;

    test('Mencari berdasarkan format file tidak valid', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);
        await customerPage.searchByImage(pathgambar);
        await customerPage.verifySearchByImageInvalidFormat();
    });
