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

| Variabel | Deskripsi | Nilai Default | Opsi |
|----------|-----------|---------------|------|
| `CUSTOMER` | Nama customer untuk pencarian di dashboard | `'Ilham Muhammad Arif'` | Nama pelanggan YuApp |
| `MARKETING` | Nama akun marketing untuk penugasan | `'IlhamMarketing'` | Nama akun marketing yang terdaftar |
| `RESI` | Nomor tracking lokal China | `'37443'` | Nomor resi lokal China unik |
| `RESI_COLOAD` | Nomor tracking coload evatrack | `'COBA1'` | Nomor resi coload unik |
| `RESI_EVA` | Nomor tracking evatrack | `'OUAA1541'` | Nomor resi evatrack yang valid |
| `RESI_DOM` | Nomor tracking domestik | `'124112435U4341'` | Nomor resi domestic yang valid |
| `KURIR` | Value kurir yang ada di Indonesia | `'1'` | `'1'` = J&T Cargo/Sentral Cargo<br>`'3'` = JNE |
| `USER` | Username untuk akun baru yang akan dibuat | `'test'` | Nama username untuk akun baru |
| `PASS` | Password untuk akun baru | `'123'` | Kombinasi angka dan huruf untuk akun baru |
| `NAMA` | Nama lengkap pengguna untuk akun baru | `'test1` | Nama lengkap untuk akun baru |
| `EMAIL` | Alamat email untuk akun baru | `'test1@contoh.com'` | Alaamt email yang valid |
| `TELP` | Nomor telepon untuk akun baru | `'628888888888'` | Nomor telpon yang terdaftar |
| `ROLE` | Value Role untuk akun baru | `'1'` |  `'1' ` = Admin<br> `'2'` = Finance<br> `'5'` = Manager<br> `'20'` = Marketing<br> `'30'` = Agen Cina<br> `'40'` = Finance<br> `'60'` = Content Creator |
| `USER_BARU` | Username untuk akun yang akan diubah | `'ubah1'` | Nama username untuk akun baru |
| `PASS_BARU` | Password untuk akun yang akan diubah | `'666'` | Kombinasi angka dan huruf untuk akun baru |
| `NAMA_BARU` | Nama lengkap pengguna untuk akun yang akan diubah | `'ubah1` | Nama lengkap untuk akun baru |
| `EMAIL_BARU` | Alamat email untuk akun yang akan diubah | `'ubah1@contoh.com'` | Alaamt email yang valid |
| `TELP_BARU` | Nomor telepon untuk akun yang akan diubah | `'621111111111'` | Nomor telpon yang terdaftar |
| `ROLE_BARU` | Value Role untuk akun yang akan diubah | `'20'` |  `'1' ` = Admin<br> `'2'` = Finance<br> `'5'` = Manager<br> `'20'` = Marketing<br> `'30'` = Agen Cina<br> `'40'` = Finance<br> `'60'` = Content Creator |
| `GAMBAR` | Nama file bukti pembayaran (di folder `gambar/`) | `'dimasganteng.png'` | File gambar valid (`.jpg`, `.png`) |
| `KURIR_SEA` | Value kategori biaya Jalur Laut | `'3'` | `'1'` = LARTAS SEA - SEA <br>`'3'` = BB - SEA<br>`'5'` = UMUM - SEA |
| `KURIR_AIR` | Value kategori biaya Jalur Udara | `'4'` | `'2'` = LARTAS - AIR<br>`'4'` = CC - AIR  |
| `PANJANG` | Dimensi barang (Panjang) | `'10'` | Nilai numerik (cm) |
| `LEBAR` | Dimensi barang (Lebar) | `'10'` | Nilai numerik (cm) |
| `TINGGI` | Dimensi barang (Tinggi) | `'10'` | Nilai numerik (cm) |
| `BERAT` | Berat barang | `'10'` | Nilai numerik (kg) |

**Mengatur Variabel:**

**CMD:**
```cmd
set "CUSTOMER=Ilham Muhammad Arif"
set "MARKETING=IlhamMarketing"
set "RESI=37443"
set "RESI_COLOAD=COBA1"
set "RESI_EVA=OUAA1541"
set "RESI_DOM=124112435U4341"
set "KURIR=1"
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
$env:KURIR="1"
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
set "KURIR="
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

