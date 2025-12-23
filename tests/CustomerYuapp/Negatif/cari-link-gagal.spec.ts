import { test, expect } from '@playwright/test';
import { CustomerPage } from '../../../pages/CustomerPage';
import { customerData } from '../../../data/customerData';

    // URL yang tidak valid
    const url = customerData.linkInvalid; 

    test('Mencari produk dengan URL tidak valid', async ({ page }) => {
        const customerPage = new CustomerPage(page);
        
        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);
        await customerPage.searchByLink(url);
        await customerPage.verifySearchByLinkInvalid();
    });
