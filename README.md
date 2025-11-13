# Playwright E2E Test - YuApp & EvaTrack Purchase Flow

Proyek ini berisi skrip otomatisasi pengujian untuk **end-to-end testing** menggunakan **Playwright**. Pengujian ini memvalidasi alur pembelian lengkap yang mencakup interaksi antara tiga sistem: Customer, Admin/Finance/Marketing, dan Agen EvaTrack.

## 🚀 Fitur Utama

- **End-to-End Testing**: Pengujian otomatis untuk alur pembelian lengkap dari awal hingga akhir
- **Page Object Model (POM)**: Struktur kode menggunakan pola desain POM untuk kemudahan pemeliharaan
- **Multi-Role Testing**: Cakupan pengujian untuk berbagai peran pengguna (Customer, Admin, Finance, Marketing, Agen)
- **Environment Variables**: Pengelolaan kredensial yang aman menggunakan file `.env`

## 📋 Persyaratan Sistem

- Node.js (versi 14 atau lebih tinggi)
- npm atau yarn package manager
- Playwright browsers

## 📁 Struktur Proyek

```
YuApp_Playwright/
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

### 3. Konfigurasi Environment

Buat file `.env` di direktori root proyek:

```bash
cp .env.example .env  # Jika .env.example tersedia
# atau
touch .env            # Untuk membuat file baru
```

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

### 4. Persiapan Asset Pengujian

**File Gambar untuk Bukti Pembayaran:**
- Buat folder `gambar/` di direktori root proyek
- Simpan semua file gambar untuk bukti pembayaran di folder `gambar/`
- Contoh struktur:
  ```
  YuApp_Playwright/
  ├── gambar/
  │   ├── dimasganteng.png
  │   ├── beard.jpg
  │   └── coba.png
  │   └── mobil.webp
  ├── tests/
  ├── .env
  └── package.json
  ```

## 🚀 Menjalankan Pengujian

### A. Pengujian Purchase Flow (flow1.spec.ts - flow10.spec.ts)

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

### B. Pengujian Kasus Positif & Negatif

Proyek ini juga menyediakan skenario pengujian positif dan negatif untuk:
- **CustomerYuapp** (alur positif & negatif)
- **AdminYuapp** (alur positif & negatif)

#### Eksekusi

```bash
npx playwright test customer-positive.spec.ts
npx playwright test customer-negative.spec.ts
npx playwright test admin-positive.spec.ts
npx playwright test admin-negative.spec.ts
```

> **Catatan**: File pengujian harus menggunakan ekstensi `.spec.ts`

### C. Konfigurasi Variabel Environment

#### Variabel Pengujian CustomerYuapp

| Variabel | Deskripsi | Nilai Default | Contoh |
|----------|-----------|---------------|---------|
| `BARANG` | Nama produk (bisa penggalan kata, tidak case-sensitive) | `'Lintas Batas Tas'` | `'Tas Persegi Kecil Gaya Korea'` |
| `JALUR` | Metode pengiriman | `'Udara'` | `'Udara'` atau `'Laut'` |
| `PROMO` | Kode promo | `'YUKYUAPP'` | `'HIJULE'` |
| `BANK` | Nama bank untuk pembayaran (bisa penggalan kata) | `'PERMATA'` | `'BNI'`, `'BRI'`, `'MANDIRI'` |
| `GAMBAR` | Nama file gambar (harus ada di folder `gambar/`) | `'beard.jpg'` | `'mobil.webp'` |
| `URL` | URL produk dari 1688.com | `'https://detail.1688.com/offer/631468992893.html'` | URL produk 1688.com yang valid |

**Mengatur Variabel:**

**CMD:**
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

#### Mengembalikan Variabel ke Nilai Default

Jika ingin mengembalikan variabel ke nilai default, cukup hapus nilai/value dari variabel tersebut:

**CMD:**
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

#### Variabel Pengujian AdminYuapp

| Variabel | Deskripsi | Nilai Default |
|----------|-----------|---------------|
| `CUSTOMER` | Nama customer untuk pencarian di dashboard | `'Ilham Muhammad Arif'` |
| `MARKETING` | Nama akun marketing untuk penugasan | `'IlhamMarketing'` |
| `RESI` | Nomor tracking lokal China | `'37443'` |
| `RESI_COLOAD` | Nomor tracking coload evatrack | `'COBA1'` |
| `RESI_EVA` | Nomor tracking evatrack | `'OUAA1541'` |
| `RESI_DOM` | Nomor tracking domestik | `'124112435U4341'` |
| `KURIR_SEA` | Kategori Biaya Jalur Laut | `'3' ( BB - SEA - 100.000,00 )` |
| `KURIR_AIR` | Kategori Biaya Jalur Udara | `'4' ( CC - AIR - 50.000,00 )` |
| `PANJANG` | Dimensi barang (Panjang) | `'10'` |
| `LEBAR` | Dimensi barang (Lebar) | `'10'` |
| `TINGGI` | Dimensi barang (Tinggi) | `'10'` |
| `BERAT` | Berat barang | `'10'` |

**Mengatur Variabel:**

**CMD:**
```cmd
set "CUSTOMER=Ilham Muhammad Arif"
set "MARKETING=IlhamMarketing"
set "RESI=37443"
set "RESI_COLOAD=COBA1"
set "RESI_EVA=OUAA1541"
set "RESI_DOM=124112435U4341"
set "GAMBAR=dimasganteng.png"
npx playwright test admin-positive.spec.ts
```

**PowerShell:**
```powershell
$env:CUSTOMER="Ilham Muhammad Arif"
$env:MARKETING="IlhamMarketing"
$env:RESI="37443"
$env:RESI_COLOAD="COBA1"
$env:RESI_EVA="OUAA1541"
$env:RESI_DOM="124112435U4341"
$env:GAMBAR="dimasganteng.png"
npx playwright test admin-positive.spec.ts
```

#### Mengembalikan Variabel ke Nilai Default

Jika ingin mengembalikan variabel ke nilai default, cukup hapus nilai/value dari variabel tersebut:

**CMD:**
```cmd
set "CUSTOMER="
set "MARKETING="
set "RESI="
set "RESI_COLOAD="
set "RESI_EVA="
set "RESI_DOM="
set "GAMBAR="
```

**PowerShell:**
```powershell
$env:CUSTOMER=""
$env:MARKETING=""
$env:RESI=""
$env:RESI_COLOAD=""
$env:RESI_EVA=""
$env:RESI_DOM=""
$env:GAMBAR=""
```

## 📊 Melihat Laporan Pengujian

Setelah eksekusi pengujian selesai, Playwright akan menghasilkan laporan HTML.

```bash
# Membuka laporan HTML
npx playwright show-report
```

Laporan akan terbuka di browser dengan informasi detail:
- Ringkasan eksekusi pengujian
- Status Pass/Fail per test case
- Screenshot (jika pengujian gagal)
- Jejak eksekusi
- Metrik performa

## 📝 Praktik Terbaik

- Selalu gunakan mode `--headed` saat debugging
- Atur RESI dan TANDA yang unik untuk setiap eksekusi pengujian
- Simpan kredensial di file `.env`, jangan hardcode di file pengujian
- Gunakan UI Mode (`--ui`) untuk memeriksa langkah-langkah pengujian
- Tinjau laporan HTML setelah eksekusi pengujian
- Simpan asset gambar di folder `gambar/` dengan konvensi penamaan yang jelas

## 🐛 Penyelesaian Masalah

### Masalah Umum

1. **Error "Browser not found"**
   ```bash
   npx playwright install
   ```

2. **"File .env tidak ditemukan"**
   - Pastikan file `.env` ada di direktori root
   - Verifikasi format dan isi file `.env`

3. **"File gambar tidak ditemukan"**
   - Pastikan file gambar ada di folder `gambar/`
   - Verifikasi nama file sesuai dengan variabel `GAMBAR`

4. **"RESI/TANDA duplikat"**
   - Atur RESI dan TANDA dengan nilai unik sebelum menjalankan pengujian
   - Gunakan timestamp atau nomor acak untuk menghasilkan nilai unik

## 🤝 Kontribusi

Proyek ini dibuat sebagai bagian dari Program Magang QA.

## 📌 Repository

GitHub: [https://github.com/imarif28/YuApp_Playwright](https://github.com/imarif28/YuApp_Playwright)

---

