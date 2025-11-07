import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import { AdminPage } from '../../../pages/AdminPage';

    // --- Variabel Data Tes ---

    // Nama customer yang melakukan pembelian (untuk pencarian di dashboard admin/marketing/finance)
    const customer_name = process.env.CUSTOMER || 'Ilham Muhammad Arif';
    // Nama akun marketing yang akan ditugaskan oleh Admin
    const nama_marketing = process.env.MARKETING || 'IlhamMarketing';

    // Nomor lokal China yang diinput oleh Admin
    const no_local_china = process.env.RESI || '37443';
    // Path relatif ke file bukti pembayaran yang akan diupload oleh Finance
    const gambar = process.env.GAMBAR || 'dimasganteng.png';
    const filePath = `gambar/${gambar}`;

    
