import { test, expect } from '@playwright/test';
import { CustomerPage } from '../../../pages/CustomerPage';
import { customerData } from '../../../data/customerData';

    // Path ke file gambar yang tidak akan ditemukan
    const gambar = customerData.gambarInvalid;
    const pathgambar = `gambar/${gambar}`;

    test('Mencari berdasarkan gambar tidak ditemukan', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);
        await customerPage.searchByImage(pathgambar);
        await customerPage.verifySearchByImageNotFound();
    });
