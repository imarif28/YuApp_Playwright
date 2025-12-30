# Playwright E2E Test - YuApp & EvaTrack Purchase Flow

Proyek ini berisi skrip otomatisasi pengujian untuk **end-to-end testing** menggunakan **Playwright**. Pengujian ini memvalidasi alur pembelian lengkap yang mencakup interaksi antara tiga sistem: Customer, Admin/Finance/Marketing, dan Agen EvaTrack.

---

## 🚀 Fitur Utama

- **End-to-End Testing**: Pengujian otomatis untuk alur pembelian lengkap dari awal hingga akhir
- **Page Object Model (POM)**: Struktur kode menggunakan pola desain POM untuk kemudahan pemeliharaan
- **Multi-Role Testing**: Cakupan pengujian untuk berbagai peran pengguna (Customer, Admin, Finance, Marketing, Agen)
-  **Centralized Data Management**: Pengelolaan data pengujian terpusat melalui file konfigurasi
- **Environment Variables**: Pengelolaan kredensial yang aman menggunakan file `.env`

---

## 📋 Persyaratan Sistem

- Node.js (versi 14 atau lebih tinggi)
- npm atau yarn package manager
- Playwright browsers

---

## 📁 Struktur Proyek

```
YuApp_Playwright/
├── data/                                # Kumpulan data tes terpusat
│   ├── adminData.ts
│   └── customerData.ts
│
├── pages/                               # Kelas Page Object Model
│   ├── AdminPage.ts
│   ├── CustomerPage.ts
│   ├── EvaPage.ts
│   └── LoginPage.ts
│
├── gambar/                              # Asset gambar untuk pengujian
│   ├── dimasganteng.png
│   ├── beard.jpg
│   ├── coba.png
│   └── mobil.webp
│
├── tests/                               # File pengujian
│   ├── AdminYuapp/
│   │   ├── admin-positive.spec.ts
│   │   └── admin-negative.spec.ts
│   │
│   ├── CustomerYuapp/
│   │   ├── customer-positive.spec.ts
│   │   └── customer-negative.spec.ts
│   │
│   ├── Evatrack/
│   │   ├── evatrack-positive.spec.ts
│   │   └── evatrack-negative.spec.ts
│   │
│   └── PurchaseFlow/
│       └── flow[nomer].spec.ts
│
├── .env                                  # Variabel environment (diabaikan git)
├── .env.example                          # Template untuk .env
├── playwright.config.ts                  # Konfigurasi Playwright
└── package.json                          # Dependencies proyek
```

---

## 🛠️ Pengaturan & Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/imarif28/YuApp_Playwright.git
cd YuApp_Playwright
```

### 2. Instalasi Dependencies

```bash
npm install
```

> **Catatan**: Jika browser Playwright belum terinstall, jalankan:
> ```bash
> npx playwright install
> ```

### 3. Konfigurasi Environment Variables

#### Membuat File .env

Buat file `.env` di direktori root proyek:

```bash
cp .env.example .env  # Jika .env.example tersedia
# atau
touch .env            # Untuk membuat file baru
```

#### Mengisi File .env

Isi file `.env` dengan kredensial dan URL untuk lingkungan pengujian:

```env
# Lingkungan Customer
CUSTOMER_URL="https://..."
CUSTOMER_WHATSAPP="..."
CUSTOMER_PASSWORD="..."

# Lingkungan Admin
ADMIN_URL="https://..."
ADMIN_USERNAME="..."
ADMIN_PASSWORD="..."
FINANCE_USERNAME="..."
FINANCE_PASSWORD="..."
MARKETING_USERNAME="..."
MARKETING_PASSWORD="..."

# Lingkungan Agen EvaTrack
EVA_URL="https://..."
EVA_USERNAME="..."
EVA_PASSWORD="..."
```
> **⚠️ Peringatan Keamanan**: Pastikan file `.env` sudah ditambahkan ke `.gitignore` untuk mencegah kredensial ter-commit ke repository!

### 4. Konfigurasi Centralized Data Management

#### Konfigurasi Data Customer (`data/customerData.ts`)

File ini berisi semua data yang digunakan untuk pengujian Customer seperti informasi produk, metode pembayaran, dan preferensi pengiriman.

**Contoh struktur:**

```typescript
// data/customerData.ts

export const customerData = {

    // Nama produk yang dibeli (bisa penggalan kata, case-insensitive)
    namaBarang: 'Alat Cukur Listrik Portabel Pria',
    
    // Pilih jalur pengiriman yang diinginkan Customer ('Udara' atau 'Laut')
    jalurPengiriman: 'Laut',

    // Nama bank untuk metode pembayaran (bisa penggalan kata, case-insensitive)
    namaBank: 'PERMATA',
    
    // Nama promo yang belum di pakai
    promoCode: 'Playwright',
    
    // Pencarian Gambar (pastikan file ada di folder root/gambar)
    gambarValid: 'beard.jpg',

};
```

**Cara penggunaan di test:**

```typescript
import { test, expect } from '@playwright/test';
import { customerData } from '../../../data/customerData';

    // Nama produk yang dibeli (bisa penggalan kata, case-insensitive) 
    const nama_barang = process.env.BARANG || customerData.namaBarang;

    await customerPage.addProductToCart(nama_barang);

    });

```

#### Konfigurasi Data Admin (`data/adminData.ts`)

File ini berisi semua data yang digunakan untuk pengujian Admin, Finance, dan Marketing seperti informasi customer, tracking, biaya, dan konfigurasi sistem.

**Contoh struktur:**

```typescript
// data/adminData.ts

export const adminData = {
    // Identitas Customer Target
    targetCustomerName: 'Ilham Muhammad Arif',                  // Nama lengkap Customer

    // Marketing
    marketingName: 'IlhamMarketing',                            // Username Marketing
    marketingValueForEdit: '1614',                              // Value Marketing untuk Edit Invoice

    // Kurs
    rateYuan: '6600',                                           // Kurs Yuan

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

};
```

**Cara penggunaan di test:**

```typescript
import { test, expect } from '@playwright/test';
import { adminData } from '../../../../data/adminData';

    // Nama customer yang melakukan pembelian (untuk pencarian di dashboard admin/marketing/finance)
    const customer_name = process.env.CUSTOMER || adminData.targetCustomerName;

    // Nomor lokal China yang diinput oleh Admin
    const no_local_china = process.env.RESI || adminData.noLocalChina;

    await adminPage.inputLocalChinaNumber(customer_name, no_local_china);

    });

```

### 5. Persiapan Asset Gambar

**File Gambar untuk Bukti Pembayaran:**

1. Buat folder `gambar/` di direktori root proyek
2. Simpan semua file gambar untuk bukti pembayaran di folder `gambar/`

**Contoh struktur:**
```
YuApp_Playwright/
├── gambar/
│   ├── dimasganteng.png
│   ├── beard.jpg
│   ├── coba.png
│   └── mobil.webp
├── tests/
├── .env
└── package.json
```

---

## 🚀 Menjalankan Pengujian

### A. Pengujian Purchase Flow

#### Eksekusi Dasar

```bash
# Menjalankan flow tertentu
npx playwright test flow[nomor].spec.ts

# Menjalankan dengan mode headed (browser terlihat)
npx playwright test flow[nomor].spec.ts --headed
```

> **Catatan**: Sintaks sama untuk Command Prompt (CMD) dan PowerShell

#### Mengatur Variabel RESI & TANDA

**PENTING**: Setiap kali menjalankan pengujian membutuhkan `RESI` (nomor tracking) dan `TANDA` (kode mark) yang **unik/berbeda**.

**Command Prompt (CMD):**
```cmd
set "RESI=nomor_resi_baru"
set "TANDA=kode_mark_baru"
npx playwright test flow[nomor].spec.ts --headed
```

**PowerShell:**
```powershell
$env:RESI="nomor_resi_baru"
$env:TANDA="kode_mark_baru"
npx playwright test flow[nomor].spec.ts --headed
```

### B. Pengujian Positif & Negatif

Proyek ini menyediakan skenario pengujian positif dan negatif untuk:
- **CustomerYuapp** (customer-positive.spec.ts & customer-negative.spec.ts)
- **AdminYuapp** (admin-positive.spec.ts & admin-negative.spec.ts)
- **Evatrack** (evatrack-positive.spec.ts & evatrack-negative.spec.ts)

#### Eksekusi Pengujian

```bash
# Customer Tests
npx playwright test customer-positive.spec.ts
npx playwright test customer-negative.spec.ts

# Admin Tests
npx playwright test admin-positive.spec.ts
npx playwright test admin-negative.spec.ts

# Evatrack Tests
npx playwright test evatrack-positive.spec.ts
npx playwright test evatrack-negative.spec.ts
```

---

## ⚙️ Konfigurasi Variabel Environment

### Variabel untuk CustomerYuapp

#### Daftar Variabel CustomerYuapp

| Variabel | Deskripsi | Nilai Default | Contoh |
|----------|-----------|---------------|---------|
| `BARANG` | Nama produk (bisa penggalan kata, tidak case-sensitive) | `'Lintas Batas Tas'` | `'Tas Persegi Kecil Gaya Korea'` |
| `JALUR` | Metode pengiriman | `'Udara'` | `'Udara'` atau `'Laut'` |
| `PROMO` | Kode promo | `'YUKYUAPP'` | `'HIJULE'` |
| `BANK` | Nama bank untuk pembayaran (bisa penggalan kata) | `'PERMATA'` | `'BNI'`, `'BRI'`, `'MANDIRI'` |
| `GAMBAR` | Nama file gambar (harus ada di folder `gambar/`) | `'beard.jpg'` | `'mobil.webp'` |
| `URL` | URL produk dari 1688.com | `'https://detail.1688.com/offer/631468992893.html'` | URL produk 1688.com yang valid |

#### Mengatur Variabel CustomerYuapp

**Command Prompt (CMD):**
```cmd
set "BARANG=Tas Persegi Kecil"
set "JALUR=Laut"
set "PROMO=DISCOUNT50"
set "BANK=BNI"
set "GAMBAR=beard.jpg"
set "URL=https://detail.1688.com/offer/123456789.html"
npx playwright test customer-positive.spec.ts
```

**PowerShell:**
```powershell
$env:BARANG="Tas Persegi Kecil"
$env:JALUR="Laut"
$env:PROMO="DISCOUNT50"
$env:BANK="BNI"
$env:GAMBAR="beard.jpg"
$env:URL="https://detail.1688.com/offer/123456789.html"
npx playwright test customer-positive.spec.ts
```

#### Mengembalikan Variabel CustomerYuapp ke Nilai Default

**Command Prompt (CMD):**
```cmd
set "BARANG="
set "JALUR="
set "PROMO="
set "BANK="
set "GAMBAR="
set "URL="
```

**PowerShell:**
```powershell
$env:BARANG=""
$env:JALUR=""
$env:PROMO=""
$env:BANK=""
$env:GAMBAR=""
$env:URL=""
```

---

### Variabel untuk AdminYuapp

#### Daftar Variabel AdminYuapp

| Variabel | Deskripsi | Nilai Default | Opsi |
|----------|-----------|---------------|------|
| `CUSTOMER` | Nama customer untuk pencarian | `'Ilham Muhammad Arif'` | Nama pelanggan YuApp |
| `MARKETING` | Value akun marketing | `'1614'` | `'90'` = Audy<br>`'91'` = Garda<br>`'97'` = Marketing<br>`'1614'` = IlhamMarketing |
| `RESI` | Nomor tracking lokal China | `'37443'` | Nomor resi unik |
| `RESI_COLOAD` | Nomor tracking coload | `'COBA1'` | Nomor resi coload unik |
| `RESI_EVA` | Nomor tracking evatrack | `'OUAA1541'` | Nomor resi evatrack valid |
| `RESI_DOM` | Nomor tracking domestik | `'124112435U4341'` | Nomor resi domestik valid |
| `KURIR` | Value kurir Indonesia | `'1'` | `'1'` = J&T Cargo/Sentral Cargo<br>`'3'` = JNE |
| `BIAYA_INDO` | Biaya tambahan di Indonesia (Yuan) | `'2500'` | Nominal dalam Rupiah |
| `BIAYA_CHINA` | Biaya tambahan di China (Rupiah) | `'4000'` | Nominal dalam Yuan |
| `USER` | Username akun baru | `'test'` | Nama username |
| `PASS` | Password akun baru | `'123'` | Kombinasi angka/huruf |
| `NAMA` | Nama lengkap akun baru | `'test1'` | Nama lengkap |
| `EMAIL` | Email akun baru | `'test1@contoh.com'` | Email valid |
| `TELP` | Nomor telepon akun baru | `'628888888888'` | Nomor telepon valid |
| `ROLE` | Value role akun baru | `'1'` | `'1'` = Admin<br>`'2'` = Finance<br>`'5'` = Manager<br>`'20'` = Marketing<br>`'30'` = Agen Cina<br>`'40'` = Finance<br>`'60'` = Content Creator |
| `USER_BARU` | Username untuk diubah | `'ubah1'` | Nama username |
| `PASS_BARU` | Password untuk diubah | `'666'` | Kombinasi angka/huruf |
| `NAMA_BARU` | Nama lengkap untuk diubah | `'ubah1'` | Nama lengkap |
| `EMAIL_BARU` | Email untuk diubah | `'ubah1@contoh.com'` | Email valid |
| `TELP_BARU` | Nomor telepon untuk diubah | `'621111111111'` | Nomor telepon valid |
| `ROLE_BARU` | Value role untuk diubah | `'20'` | `'1'` = Admin<br>`'2'` = Finance<br>`'5'` = Manager<br>`'20'` = Marketing<br>`'30'` = Agen Cina<br>`'40'` = Finance<br>`'60'` = Content Creator |
| `GAMBAR` | Nama file bukti pembayaran | `'dimasganteng.png'` | File `.jpg`, `.png` |
| `KURIR_SEA` | Value kategori Jalur Laut | `'3'` | `'1'` = LARTAS SEA<br>`'3'` = BB - SEA<br>`'5'` = UMUM - SEA |
| `KURIR_AIR` | Value kategori Jalur Udara | `'4'` | `'2'` = LARTAS - AIR<br>`'4'` = CC - AIR |
| `PANJANG` | Dimensi panjang (cm) | `'10'` | Nilai numerik |
| `LEBAR` | Dimensi lebar (cm) | `'10'` | Nilai numerik |
| `TINGGI` | Dimensi tinggi (cm) | `'10'` | Nilai numerik |
| `BERAT` | Berat barang (kg) | `'10'` | Nilai numerik |
| `URL_BANNER` | Link tujuan banner | `'https://www.instagram.com/__dimasim/'` | URL valid |
| `URUTAN` | Nomor urutan banner | `'5'` | Nomor urutan |
| `GAMBAR_BANNER` | File gambar banner | `'baner.png'` | File `.jpg`, `.png` |
| `URL_SBANNER` | Link tujuan sub banner | `'https://www.instagram.com/__dimasim/'` | URL valid |
| `POSISI` | Posisi sub banner | `'Kanan'` | `'Kanan'` atau `'Kiri'` |
| `GAMBAR_SBANNER` | File gambar sub banner | `'subbaner.png'` | File `.jpg`, `.png` |
| `PROMO` | Kode promo yang akan dibuat | `'dimas'` | Kode promo unik |
| `DESC_PROMO` | Deskripsi promo | `'Dibuat Melalui Playwright'` | Keterangan promo |
| `PERSEN_PROMO` | Persentase potongan | `'12'` | Angka (0-100) |
| `MAX_PROMO` | Maksimal potongan (Rp) | `'200000'` | Nominal rupiah |
| `MIN_PROMO` | Minimal pembelian (Rp) | `'120000'` | Nominal rupiah |
| `IS_EVENT` | Apakah promo event? | `'0'` | `'0'` = Tidak<br>`'1'` = Ya |
| `METHOD_PROMO` | Cakupan penerapan diskon promo | `'1'` | `'1'` = All<br>`'2'` = Goods<br>`'3'` = Freight |
| `TIPE_PROMO` | Batasan penggunaan kuota promo | `'unlimited'` | `'unlimited'` = unlimited<br>`'limited'` = limited |
| `DESC_PROMO_BARU` | Deskripsi baru untuk edit promo | `'Dibuat Melalui Playwright(Edit)'` | Keterangan promo baru |
| `PERSEN_PROMO_BARU` | Persentase potongan baru | `'10'` | Angka (0-100) baru |
| `MAX_PROMO_BARU` | Maksimal potongan baru (Rp) | `'150000'` | Nominal rupiah baru |
| `MIN_PROMO_BARU` | Minimal pembelian baru (Rp) | `'100000'` | Nominal rupiah baru |
| `IS_EVENT_PROMO_BARU` | Apakah promo event? | `'1'` | `'0'` = Tidak<br>`'1'` = Ya |
| `METHOD_PROMO_BARU` | Cakupan penerapan diskon promo | `'3'` | `'1'` = All<br>`'2'` = Goods<br>`'3'` = Freight |
| `TIPE_PROMO_BARU` | Batasan penggunaan kuota promo | `'limited'` | `'unlimited'` = unlimited<br>`'limited'` = limited |

#### Mengatur Variabel AdminYuapp

**Command Prompt (CMD):**
```cmd
set "CUSTOMER=Ilham Muhammad Arif"
set "MARKETING=1614"
set "RESI=37443"
set "RESI_COLOAD=COBA1"
set "RESI_EVA=OUAA1541"
set "RESI_DOM=124112435U4341"
set "KURIR=1"
set "BIAYA_INDO=2500"
set "BIAYA_CHINA=4000"
set "USER=test"
set "PASS=123"
set "NAMA=test1"
set "EMAIL=test1@contoh.com"
set "TELP=628888888888"
set "ROLE=1"
set "USER_BARU=ubah1"
set "PASS_BARU=666"
set "NAMA_BARU=ubah1"
set "EMAIL_BARU=ubah1@contoh.com"
set "TELP_BARU=621111111111"
set "ROLE_BARU=20"
set "GAMBAR=dimasganteng.png"
set "KURIR_SEA=3"
set "KURIR_AIR=4"
set "PANJANG=10"
set "LEBAR=10"
set "TINGGI=10"
set "BERAT=10"
set "URL_BANNER=https://www.instagram.com/__dimasim/"
set "URUTAN=5"
set "GAMBAR_BANNER=baner.png"
set "URL_SBANNER=https://www.instagram.com/__dimasim/"
set "POSISI=Kanan"
set "GAMBAR_SBANNER=subbaner.png"
set "PROMO=dimas"
set "DESC_PROMO=Dibuat Melalui Playwright"
set "PERSEN_PROMO=12"
set "MAX_PROMO=200000"
set "MIN_PROMO=120000"
set "IS_EVENT=0"
set "METHOD_PROMO=1"
set "TIPE_PROMO=unlimited"
set "DESC_PROMO_BARU=Dibuat Melalui Playwright(Edit)"
set "PERSEN_PROMO_BARU=10"
set "MAX_PROMO_BARU=150000"
set "MIN_PROMO_BARU=100000"
set "IS_EVENTPROMO_BARU=1"
set "METHOD_PROMO_BARU=3"
set "TIPE_PROMO_BARU=limited"
npx playwright test admin-positive.spec.ts
```

**PowerShell:**
```powershell
$env:CUSTOMER="Ilham Muhammad Arif"
$env:MARKETING="1614"
$env:RESI="37443"
$env:RESI_COLOAD="COBA1"
$env:RESI_EVA="OUAA1541"
$env:RESI_DOM="124112435U4341"
$env:KURIR="1"
$env:BIAYA_INDO="2500"
$env:BIAYA_CHINA="4000"
$env:USER="test"
$env:PASS="123"
$env:NAMA="test1"
$env:EMAIL="test1@contoh.com"
$env:TELP="628888888888"
$env:ROLE="1"
$env:USER_BARU="ubah1"
$env:PASS_BARU="666"
$env:NAMA_BARU="ubah1"
$env:EMAIL_BARU="ubah1@contoh.com"
$env:TELP_BARU="621111111111"
$env:ROLE_BARU="20"
$env:GAMBAR="dimasganteng.png"
$env:KURIR_SEA="3"
$env:KURIR_AIR="4"
$env:PANJANG="10"
$env:LEBAR="10"
$env:TINGGI="10"
$env:BERAT="10"
$env:URL_BANNER="https://www.instagram.com/__dimasim/"
$env:URUTAN="5"
$env:GAMBAR_BANNER="baner.png"
$env:URL_SBANNER="https://www.instagram.com/__dimasim/"
$env:POSISI="Kanan"
$env:GAMBAR_SBANNER="subbaner.png"
$env:PROMO="dimas"
$env:DESC_PROMO="Dibuat Melalui Playwright"
$env:PERSEN_PROMO="12"
$env:MAX_PROMO="200000"
$env:MIN_PROMO="120000"
$env:IS_EVENT="0"
$env:METHOD_PROMO="1"
$env:TIPE_PROMO="unlimited"
$env:DESC_PROMO_BARU="Dibuat Melalui Playwright(Edit)"
$env:PERSEN_PROMO_BARU="10"
$env:MAX_PROMO_BARU="150000"
$env:MIN_PROMO_BARU="100000"
$env:METHOD_PROMO_BARU="3"
$env:IS_EVENTPROMO_BARU="1"
$env:TIPE_PROMO_BARU="limited"
npx playwright test admin-positive.spec.ts
```

#### Mengembalikan Variabel AdminYuapp ke Nilai Default

**Command Prompt (CMD):**
```cmd
set "CUSTOMER="
set "MARKETING="
set "RESI="
set "RESI_COLOAD="
set "RESI_EVA="
set "RESI_DOM="
set "KURIR="
set "BIAYA_INDO="
set "BIAYA_CHINA="
set "USER="
set "PASS="
set "NAMA="
set "EMAIL="
set "TELP="
set "ROLE="
set "USER_BARU="
set "PASS_BARU="
set "NAMA_BARU="
set "EMAIL_BARU="
set "TELP_BARU="
set "ROLE_BARU="
set "GAMBAR="
set "KURIR_SEA="
set "KURIR_AIR="
set "PANJANG="
set "LEBAR="
set "TINGGI="
set "BERAT="
set "URL_BANNER="
set "URUTAN="
set "GAMBAR_BANNER="
set "URL_SBANNER="
set "POSISI="
set "GAMBAR_SBANNER="
set "PROMO="
set "DESC_PROMO="
set "PERSEN_PROMO="
set "MAX_PROMO="
set "MIN_PROMO="
set "IS_EVENT="
set "DESC_PROMO_BARU="
set "PERSEN_PROMO_BARU="
set "MAX_PROMO_BARU="
set "MIN_PROMO_BARU="
set "IS_EVENTPROMO_BARU="
set "METHOD_PROMO_BARU="
set "TIPE_PROMO_BARU="
```

**PowerShell:**
```powershell
$env:CUSTOMER=""
$env:MARKETING=""
$env:RESI=""
$env:RESI_COLOAD=""
$env:RESI_EVA=""
$env:RESI_DOM=""
$env:KURIR=""
$env:BIAYA_INDO=""
$env:BIAYA_CHINA=""
$env:USER=""
$env:PASS=""
$env:NAMA=""
$env:EMAIL=""
$env:TELP=""
$env:ROLE=""
$env:USER_BARU=""
$env:PASS_BARU=""
$env:NAMA_BARU=""
$env:EMAIL_BARU=""
$env:TELP_BARU=""
$env:ROLE_BARU=""
$env:GAMBAR=""
$env:KURIR_SEA=""
$env:KURIR_AIR=""
$env:PANJANG=""
$env:LEBAR=""
$env:TINGGI=""
$env:BERAT=""
$env:URL_BANNER=""
$env:URUTAN=""
$env:GAMBAR_BANNER=""
$env:URL_SBANNER=""
$env:POSISI=""
$env:GAMBAR_SBANNER=""
$env:PROMO=""
$env:DESC_PROMO=""
$env:PERSEN_PROMO=""
$env:MAX_PROMO=""
$env:MIN_PROMO=""
$env:IS_EVENT=""
$env:DESC_PROMO_BARU=""
$env:PERSEN_PROMO_BARU=""
$env:MAX_PROMO_BARU=""
$env:MIN_PROMO_BARU=""
$env:IS_EVENTPROMO_BARU="1"
$env:METHOD_PROMO_BARU=""
$env:TIPE_PROMO_BARU=""
```

---

## 🔍 Melihat Nilai Variabel yang Sedang Aktif

Sebelum menjalankan pengujian, sangat penting untuk memverifikasi bahwa variabel environment sudah diatur dengan benar.

### Command Prompt (CMD)

#### Lihat Variabel Tertentu

```cmd
set BARANG
```

#### Cek Nilai Variabel Satu per Satu

```cmd
echo %BARANG%
echo %JALUR%
echo %PROMO%
echo %BANK%
echo %GAMBAR%
echo %URL%
```

> **Catatan**: Jika tidak menampilkan apa-apa, berarti variabel kosong atau belum di-set.

#### Lihat Semua Variabel Environment

```cmd
set
```

### PowerShell

#### Lihat Variabel Tertentu

```powershell
# Lihat variabel yang berawalan BARANG
gci env:BARANG*

# Lihat variabel yang berawalan RESI
gci env:RESI*
```

#### Cek Nilai Variabel Satu per Satu

```powershell
$env:BARANG
$env:JALUR
$env:PROMO
$env:BANK
$env:GAMBAR
$env:URL
```

> **Catatan**: Jika tidak muncul apa-apa, berarti variabel kosong atau belum di-set.

#### Lihat Semua Variabel Environment

```powershell
Get-ChildItem env:
# atau singkatnya
gci env:
```

### Tips Penting tentang Variabel Environment

**Variabel Environment Bersifat SEMENTARA**

- ❌ **Jika Anda menutup terminal** dan membukanya lagi, semua variabel yang sudah di-set akan **hilang**
- ❌ **Membuka tab/window terminal baru** = variabel tidak terbawa ke sesi baru
- ✅ **Variabel hanya aktif di terminal yang sama** tempat Anda melakukan set/assignment

---

## 📊 Melihat Laporan Pengujian

Setelah eksekusi pengujian selesai, Playwright akan menghasilkan laporan HTML.

```bash
# Membuka laporan HTML
npx playwright show-report
```

**Informasi dalam Laporan:**
- Ringkasan eksekusi pengujian
- Status Pass/Fail per test case
- Screenshot (jika pengujian gagal)
- Jejak eksekusi
- Metrik performa

---

## 📝 Praktik Terbaik

### Saat Development & Debugging

- ✅ Gunakan mode `--headed` untuk melihat browser saat debugging
- ✅ Gunakan UI Mode (`--ui`) untuk inspeksi langkah-langkah pengujian secara interaktif
- ✅ Tinjau laporan HTML setelah setiap eksekusi pengujian

### Pengelolaan Data

- ✅ Selalu gunakan RESI dan TANDA yang **unik** untuk setiap eksekusi pengujian
- ✅ Verifikasi variabel environment sebelum menjalankan test
- ✅ Simpan kredensial di file `.env`, **jangan** hardcode di file pengujian
- ✅ Simpan asset gambar di folder `gambar/` dengan penamaan yang jelas

### Best Practice Playwright

Untuk informasi lebih lanjut tentang best practice Playwright, kunjungi [dokumentasi resmi Playwright](https://playwright.dev/docs/best-practices).

---

## 🐛 Penyelesaian Masalah

### 1. Error "Browser not found"

**Solusi:**
```bash
npx playwright install
```

### 2. File .env tidak ditemukan

**Solusi:**
- Pastikan file `.env` ada di direktori root
- Verifikasi format dan isi file `.env`
- Gunakan template `.env.example` jika tersedia

### 3. File gambar tidak ditemukan

**Solusi:**
- Pastikan file gambar ada di folder `gambar/`
- Verifikasi nama file sesuai dengan variabel `GAMBAR`
- Periksa ekstensi file (`.jpg`, `.png`, `.webp`)

### 4. RESI/TANDA duplikat

**Solusi:**
- Atur RESI dan TANDA dengan nilai unik sebelum menjalankan pengujian
- Gunakan timestamp atau nomor acak untuk menghasilkan nilai unik
- Contoh: `RESI_20241124_001`, `TANDA_TEST_001`

### 5. Variabel environment tidak terbaca

**Solusi:**
- Verifikasi variabel sudah di-set dengan benar menggunakan `echo %VAR%` (CMD) atau `$env:VAR` (PowerShell)
- Pastikan tidak menutup terminal setelah set variabel
- Jalankan test di terminal yang sama tempat variabel di-set

### 6. Test gagal karena timeout

**Solusi:**
- Periksa koneksi internet
- Tingkatkan timeout di `playwright.config.ts`
- Gunakan mode `--headed` untuk melihat apa yang terjadi

---

## 📌 Repository

**GitHub**: [https://github.com/imarif28/YuApp_Playwright](https://github.com/imarif28/YuApp_Playwright)

---

## 📚 Referensi & Dokumentasi

- [Playwright Official Documentation](https://playwright.dev/docs/intro)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Playwright Test Runner](https://playwright.dev/docs/test-runners)
- [Environment Variables in Node.js](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs)

---

## 🤝 Kontribusi

Proyek ini dibuat sebagai bagian dari Program Magang QA.

---

**© 2025 - YuApp Playwright E2E Testing Pro
