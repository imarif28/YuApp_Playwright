// data/adminData.ts

export const adminData = {
    // Identitas Customer Target
    targetCustomerName: 'Ilham Muhammad Arif',                  // Nama lengkap Customer

    // Marketing
    marketingName: 'IlhamMarketing',                            // Username Marketing
    marketingValueForEdit: '1614',                              // Value Marketing untuk Edit Invoice

    // Finance & Shipping Adjustment
    filePathBuktiBayar: 'dimasganteng.png',                     // File Bukti Pembayaran
    filePathBuktiBarang: 'tas.jpg',                             // File Bukti Barang
    noLocalChina: '2356579',                                    // Nomor resi lokal pengiriman di China
    noResiCoload: 'COBA3',                                      // Nomor resi Coload
    noResiEvatrack: 'ZNLJA131',                                 // Nomor resi tracking sistem internal (Evatrack)
    noResiDomestic: '134Y131',                                  // Nomor resi pengiriman domestik Indonesia
    kurirDomestik: '1',                                         // Kurir pengiriman domestik Indonesia
    costsCina: '4000',                                          // Biaya tambahan dari Cina
    costsIndo: '2500',                                          // Biaya tambahan dari Indonesia

    // Kurs
    rateYuan: '6600',                                           // Kurs Yuan

    // Data Invoice Baru (Edit)
    editInvoiceData: {
        seaCategoryValue: '3',                                  // Kategori Biaya Laut
        panjang: '5',                                           // Dimensi barang (Panjang)
        lebar: '5',                                             // Dimensi barang (Lebar)
        tinggi: '10',                                           // Dimensi barang (Tinggi)
        airCategoryValue: '4',                                  // Kategori Biaya Udara
        berat: '3'                                              // Berat barang
    },

    // User Management (Data User Baru)
    newUserData: {
        username: process.env.USER || 'test1',                  // Username untuk akun baru yang akan dibuat
        password: process.env.PASS || '123',                    // Password untuk akun baru
        nama: process.env.NAMA || 'test',                       // Nama lengkap pengguna untuk akun baru
        email: process.env.EMAIL || 'test1@contoh.com',         // Alamat email untuk akun baru   
        phone: process.env.TELP || '628888888888',              // Nomor telepon untuk akun baru
        roleValue: process.env.ROLE || '1'                      // ID Role untuk akun baru ('1' untuk Admin, '2' untuk Finance, '5' untuk Manager, '20' untuk Marketing, '30' untuk Agen Cina, '40' untuk Finance, dan '60' untuk Content Creator.)
    },
    
    // Data Update User
    updateUser: {
        username: 'UserDiubah1',                                // Username untuk akun yang akan diubah
        password: '666',                                        // Password untuk akun yang akan diubah
        nama: 'Nama Diubah',                                    // Nama lengkap pengguna untuk akun yang akan diubah
        email: 'ubah1@contoh.com',                              // Alamat email untuk akun yang akan diubah
        phone: '621111111111',                                  // Nomor telepon untuk akun yang akan diubah
        roleValue: '20'                                         // ID Role untuk akun yang akan diubah
    },

    // Invoice
    invoiceData: {
        seaCategoryValue: '3',                                  // Kategori Biaya Laut (Value '3' = BB - SEA - 100.000,00)
        panjang: '10',                                          // Dimensi barang (Panjang)
        lebar: '10',                                            // Dimensi barang (Lebar)
        tinggi: '10',                                           // Dimensi barang (Tinggi)
        airCategoryValue: '4',                                  // Kategori Biaya Udara (Value '4' = CC - AIR - 50.000,00)
        berat: '10'                                             // Berat barang
    },

    // Banner
    banner: {
        urlMobile: 'https://www.instagram.com/__dimasim/',      // URL Banner Mobile
        orderMobile: '6',                                       // Urutan Banner Mobile
        filePathMobile: 'baner.png',                            // File Banner Mobile
        urlWeb: 'https://www.instagram.com/__dimasim/',         // URL Banner Web
        orderWeb: '5',                                          // Urutan Banner Web
        filePathWeb: 'baner.png'                                // File Banner Web
    },

    // Sub Banner
    subBanner: {
        url: 'https://www.instagram.com/__dimasim/',            // URL Sub Banner
        position: 'Kiri',                                       // Posisi Sub Banner
        filePath: 'subbaner.png'                                // File Sub Banner
    },

    // Promo
    promo: {
        code: 'Playwright',                                     // Nama Promo
        description: 'Dibuat Melalui Playwright',               // Deskripsi Promo
        percentage: '12',                                       // Persentase Diskon
        maxDiscount: '200000',                                  // Maksimal Diskon
        minPurchase: '40000',                                   // Minimal Pembelian
        isEvent: '0',                                           // Apakah Promo Event
        method: '1',                                            // Metode Promo 
        type: 'limited',                                        // Tipe Promo
        limitCount: '4'                                         // Batas Penggunaan Promo
    },

    // Promo Edit
    updatePromo: {
        code: 'UbahCode',                                       // Ubah Nama Promo
        description: 'Ubah Melalui Playwright',                 // Ubah Deskripsi Promo
        percentage: '7',                                        // Ubah Persentase Diskon
        maxDiscount: '50000',                                   // Ubah Maksimal Diskon
        minPurchase: '30000',                                   // Ubah Minimal Pembelian
        isEvent: '1',                                           // Ubah Apakah Promo Event
        method: '3',                                            // Ubah Metode Promo
        type: 'limited',                                        // Ubah Tipe Promo
        limitCount: '1'                                         // Ubah Batas Penggunaan Promo
    }
};