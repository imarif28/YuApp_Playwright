// data/adminData.ts

export const adminData = {
    // Identitas Customer Target
    targetCustomerName: 'Ilham Muhammad Arif',
    
    // Marketing
    marketingName: 'IlhamMarketing',
    marketingValueForEdit: '1614',
    
    // Finance & Shipping Adjustment
    filePathBuktiBayar: 'dimasganteng.png',
    filePathBuktiBarang: 'tas.jpg',
    noLocalChina: '2356579',
    noResiCoload: 'COBA3',
    noResiEvatrack: 'ZNLJA131',
    noResiDomestic: '134Y131',
    kurirDomestik: '1',
    costsCina: '20000',
    costsIndo: '4000',

    // Kurs
    rateYuan: '6600',

    // Data Invoice Baru (Edit)
    editInvoiceData: {
        seaCategoryValue: '3',
        panjang: '5',
        lebar: '5',
        tinggi: '10',
        airCategoryValue: '4',
        berat: '3'
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
        username: 'UserDiubah1',
        password: '666',
        nama: 'Nama Diubah',
        email: 'ubah1@contoh.com',
        phone: '621111111111',
        roleValue: '20'
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
        urlMobile: 'https://www.instagram.com/__dimasim/',
        orderMobile: '6',
        filePathMobile: 'baner.png',
        urlWeb: 'https://www.instagram.com/__dimasim/',
        orderWeb: '5',
        filePathWeb: 'baner.png'
    },

    // Sub Banner
    subBanner: {
        url: 'https://www.instagram.com/__dimasim/',
        position: 'Kiri',
        filePath: 'subbaner.png'
    },

    // Promo
    promo: {
        code: 'Playwright',
        description: 'Dibuat Melalui Playwright',
        percentage: '12',
        maxDiscount: '200000',
        minPurchase: '120000',
        isEvent: '0',
        method: '1',
        type: 'unlimited'
    },

    // Promo Edit
    updatePromo: {
        code: 'UbahCode',
        description: 'Ubah Melalui Playwright',
        percentage: '7',
        maxDiscount: '50000',
        minPurchase: '40000',
        isEvent: '1',
        method: '3',
        type: 'unlimited'
    }
};