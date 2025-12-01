import { test, expect } from '@playwright/test';
import { EvaPage } from '../../pages/EvaPage';


    test('Agen berhasil mengeluarkan barang dari kontainer ke gudang', async ({ page }) => {
        const evaPage = new EvaPage(page);

        await evaPage.goto();
        await evaPage.login(process.env.EVA_USERNAME!, process.env.EVA_PASSWORD!);

        await evaPage.agentUnstuffingProcess();
    });
