import { test, expect } from '@playwright/test';
import { EvaPage } from '../../pages/EvaPage';

    // --- Variabel Data Tes ---

    // Data lengkap untuk pengisian form 'New Receipt' oleh Agen China
    const receiptData = {
        shipping_mark: process.env.TANDA || 'CB46',// Tanda pengiriman unik untuk resi ini
    };

    test('Agen berhasil menyelesaikan shipping dari gudang', async ({ page }) => {
        const evaPage = new EvaPage(page);

        await evaPage.goto();
        await evaPage.login(process.env.EVA_USERNAME!, process.env.EVA_PASSWORD!);

        await evaPage.agentFinalizeShipping(receiptData.shipping_mark);
    });
