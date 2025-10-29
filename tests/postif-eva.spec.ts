import { test, expect } from '@playwright/test';
import { EvaPage } from '../pages/EvaPage';

    // --- Variabel Data Tes ---

    // Pilih jalur pengiriman yang diinginkan Customer ('Udara' atau 'Laut')
    const jalur_pengiriman = 'Laut';
    // Nomor lokal China yang diinput oleh Admin
    const no_local_china = '68127636';

    // Data lengkap untuk pengisian form 'New Receipt' oleh Agen China
    const receiptData = {
        no_local_cina: no_local_china,        // Menggunakan nomor lokal China dari Admin
        shipping_mark: 'CB35',                // Tanda pengiriman unik untuk resi ini
        jalur_pengiriman: jalur_pengiriman,   // Menggunakan jalur pengiriman dari Customer
        panjang: '10',                        // Dimensi barang (Panjang)
        lebar: '10',                          // Dimensi barang (Lebar)
        tinggi: '10',                         // Dimensi barang (Tinggi)
        berat: '10',                          // Berat barang
        total_ctn: '10',                      // Jumlah karton/paket
        deskripsi: 'Kantong pelatihan olahraga lintas-batas Tas Silindris Kantong Renang Pemisahan Kering dan Basah Logo Kustom Kustom Tas Nylon Tanah Nylon', // Deskripsi barang
        tipe_ekspedisi: 'UDARA - ALL CATEGORIES' // Tipe ekspedisi yang dipilih Agen (sesuaikan jika perlu)
    };

    test('Input new receipt', async ({ page }) => {
        const evaPage = new EvaPage(page);

        await evaPage.goto();
        await evaPage.login(process.env.EVA_USERNAME!, process.env.EVA_PASSWORD!);

        await evaPage.agentInputNewReceipt(receiptData);
    });

    test('Update status pengiriman coload', async ({ page }) => {
        const evaPage = new EvaPage(page);

        await evaPage.goto();
        await evaPage.login(process.env.EVA_USERNAME!, process.env.EVA_PASSWORD!);

        await evaPage.agentUpdateColoadDeliveryStatus(receiptData.shipping_mark, receiptData.jalur_pengiriman);
    });

    test('Mengeluarkan barang dari kontainer ke gudang', async ({ page }) => {
        const evaPage = new EvaPage(page);

        await evaPage.goto();
        await evaPage.login(process.env.EVA_USERNAME!, process.env.EVA_PASSWORD!);

        await evaPage.agentUnstuffingProcess();
    });

    test('Menyelesaikan shipping dari gudang', async ({ page }) => {
        const evaPage = new EvaPage(page);

        await evaPage.goto();
        await evaPage.login(process.env.EVA_USERNAME!, process.env.EVA_PASSWORD!);

        await evaPage.agentFinalizeShipping(receiptData.shipping_mark);
    });
