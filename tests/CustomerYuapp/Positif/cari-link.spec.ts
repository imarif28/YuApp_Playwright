import { test, expect } from '@playwright/test';
import { CustomerPage } from '../../../pages/CustomerPage';
import { customerData } from '../../../data/customerData';
 
    // Url yang valid
    const url = process.env.URL || customerData.link1688Valid;

    test('Mencari produk berdasarkan URL', async ({ page }) => {
        const customerPage = new CustomerPage(page);
        // const expectedProduct = 'Penutup Jenggot Pria Satin Besar ';

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);
        await customerPage.searchByLink(url);
        await customerPage.verifySearchByLinkSuccess();
    });
