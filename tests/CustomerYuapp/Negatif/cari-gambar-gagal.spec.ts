import { test, expect } from '@playwright/test';
import { CustomerPage } from '../../../pages/CustomerPage';

    // Path ke file gambar yang tidak akan ditemukan
    const gambar = process.env.GAMBAR || 'dimasganteng.png';
    const pathgambar = `gambar/${gambar}`;

    test('Mencari berdasarkan gambar tidak ditemukan', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);
        await customerPage.searchByImage(pathgambar);
        await customerPage.verifySearchByImageNotFound();
    });
