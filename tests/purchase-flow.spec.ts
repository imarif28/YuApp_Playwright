import { test, expect } from '@playwright/test';
import { CustomerPage } from '../pages/CustomerPage';
import { LoginPage } from '../pages/LoginPage';
import { AdminPage } from '../pages/AdminPage';
import { EvaPage } from '../pages/EvaPage';

test.describe('Purchase Flow Approve', () => {
    // --- Variabel Data Tes ---

    // Nama produk yang dibeli (bisa penggalan kata, case-insensitive)
    const nama_barang = 'Lintas Batas Tas';
    // Nama customer yang melakukan pembelian (untuk pencarian di dashboard admin/marketing/finance)
    const customer_name = 'Ilham Muhammad Arif';
    // Nama akun marketing yang akan ditugaskan oleh Admin
    const nama_marketing = 'IlhamMarketing';

    // Pilih jalur pengiriman yang diinginkan Customer ('Udara' atau 'Laut')
    const jalur_pengiriman = 'Laut';
    // Nama bank untuk metode pembayaran (bisa penggalan kata, case-insensitive, misal: 'PERMATA' untuk 'VA_PERMATA')
    const nama_bank = 'PERMATA';
    // Nomor lokal China yang diinput oleh Admin
    const no_local_china = '12535612';
    // Path relatif ke file bukti pembayaran yang akan diupload oleh Finance
    const filePath = 'dimasganteng.png';

    // Data lengkap untuk pengisian form 'New Receipt' oleh Agen China
    const receiptData = {
        no_local_cina: no_local_china,        // Menggunakan nomor lokal China dari Admin
        shipping_mark: 'CB38',                // Tanda pengiriman unik untuk resi ini
        jalur_pengiriman: jalur_pengiriman,   // Menggunakan jalur pengiriman dari Customer
        panjang: '10',                        // Dimensi barang (Panjang)
        lebar: '10',                          // Dimensi barang (Lebar)
        tinggi: '10',                         // Dimensi barang (Tinggi)
        berat: '10',                          // Berat barang
        total_ctn: '10',                      // Jumlah karton/paket
        deskripsi: 'Kantong pelatihan olahraga lintas-batas Tas Silindris Kantong Renang Pemisahan Kering dan Basah Logo Kustom Kustom Tas Nylon Tanah Nylon', // Deskripsi barang
        tipe_ekspedisi: 'UDARA - ALL CATEGORIES' // Tipe ekspedisi yang dipilih Agen (sesuaikan jika perlu)
    };

    test('Customer berhasil melakukan pembelian', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);
        await customerPage.addProductToCart(nama_barang);
        await customerPage.checkoutProduct(nama_barang);
        await customerPage.createOrder();
    });

    test('Admin berhasil mengubah status order menjadi pengiriman', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);
        await adminPage.adjustShippingPrice(customer_name, nama_marketing);
    });

    test('Marketing berhasil mengubah status order menjadi Menunggu pembayaran', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.MARKETING_USERNAME!, process.env.MARKETING_PASSWORD!);
        await adminPage.marketingUpdateStatusToAwaitingPayment(customer_name);
    });

    test('Customer berhasil memilih metode pengiriman dan pembayaran', async ({ page }) => {
        const customerPage = new CustomerPage(page);

        await customerPage.goto();
        await customerPage.login(process.env.CUSTOMER_WHATSAPP!, process.env.CUSTOMER_PASSWORD!);

        await customerPage.navigateToTransactionList();
        await customerPage.selectShippingForOrder(nama_barang);
        await customerPage.chooseShippingAndPaymentWithoutPromo(jalur_pengiriman, nama_bank);
        await customerPage.verifyPaymentPage(nama_bank);
    });

    test('Finance berhasil menyetujui pembayaran', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.FINANCE_USERNAME!, process.env.FINANCE_PASSWORD!);

        await adminPage.financeApprovePayment(customer_name, filePath);
    });

    test('Admin berhasil menginput nomor lokal China', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const adminPage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login(process.env.ADMIN_USERNAME!, process.env.ADMIN_PASSWORD!);

        await adminPage.adminInputLocalChinaNumber(customer_name, no_local_china);
    });

    test('Agen China berhasil input new receipt', async ({ page }) => {
        const evaPage = new EvaPage(page);

        await evaPage.goto();
        await evaPage.login(process.env.EVA_USERNAME!, process.env.EVA_PASSWORD!);

        await evaPage.agentInputNewReceipt(receiptData);
    });

    test('Agen berhasil update status pengiriman coload', async ({ page }) => {
        const evaPage = new EvaPage(page);

        await evaPage.goto();
        await evaPage.login(process.env.EVA_USERNAME!, process.env.EVA_PASSWORD!);

        await evaPage.agentUpdateColoadDeliveryStatus(receiptData.shipping_mark, receiptData.jalur_pengiriman);
    });

    test('Agen berhasil mengeluarkan barang dari kontainer ke gudang', async ({ page }) => {
        const evaPage = new EvaPage(page);

        await evaPage.goto();
        await evaPage.login(process.env.EVA_USERNAME!, process.env.EVA_PASSWORD!);

        await evaPage.agentUnstuffingProcess();
    });

    test('Agen berhasil menyelesaikan shipping dari gudang', async ({ page }) => {
        const evaPage = new EvaPage(page);

        await evaPage.goto();
        await evaPage.login(process.env.EVA_USERNAME!, process.env.EVA_PASSWORD!);

        await evaPage.agentFinalizeShipping(receiptData.shipping_mark);
    });
});