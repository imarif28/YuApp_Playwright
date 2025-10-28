# Playwright E2E Test - YuApp & EvaTrack Purchase Flow

Proyek ini berisi skrip otomatisasi pengujian (*end-to-end*) menggunakan **Playwright** untuk memvalidasi alur lengkap pembelian barang. Alur ini mencakup interaksi antara tiga sistem (Customer, Admin/Finance/Marketing, dan Agen EvaTrack).

## 🚀 Fitur Utama

* **End-to-End Testing**: Menguji seluruh alur dari awal hingga akhir.
* **Page Object Model (POM)**: Kode terstruktur rapi menggunakan pola POM.
* **Multi-Role**: Mencakup interaksi dari berbagai peran pengguna (Customer, Admin, Finance, Marketing, Agen).
* **Environment Variables**: Menggunakan file `.env` untuk mengelola kredensial dan URL secara aman.

## 🛠️ Cara Menjalankan

1.  **Clone Repository**:
    ```bash
    git clone [https://www.fda.gov/drugs/types-applications/abbreviated-new-drug-application-anda](https://www.fda.gov/drugs/types-applications/abbreviated-new-drug-application-anda)
    cd [Nama Folder Proyek]
    ```

2.  **Instal Dependencies**:
    ```bash
    npm install
    ```
    *(Jika Anda belum menginstal browser Playwright, jalankan juga: `npx playwright install`)*

3.  **Buat File `.env`**:
    * Salin file `.env.example` (jika ada) atau buat file baru bernama `.env` di *root* proyek.
    * Isi file `.env` dengan kredensial dan URL yang sesuai untuk lingkungan pengujian Anda:
        ```env
        CUSTOMER_URL="https://..."
        CUSTOMER_WHATSAPP="...."
        CUSTOMER_PASSWORD="...."

        ADMIN_URL="https://..."
        ADMIN_USERNAME="..."
        ADMIN_PASSWORD="..."
        FINANCE_USERNAME="..."
        FINANCE_PASSWORD="..."
        MARKETING_USERNAME="..."
        MARKETING_PASSWORD="..."

        EVA_URL="https://..."
        EVA_USERNAME="..."
        EVA_PASSWORD="..."
        ```
    * **Penting**: Pastikan file `.env` sudah ditambahkan ke `.gitignore` Anda!

4.  **(Opsional) Siapkan File Bukti Bayar**:
    * Pastikan file gambar bukti bayar (misalnya `dimasganteng.png`) ada di *root* proyek atau sesuaikan path-nya di `purchase-flow.spec.ts` jika perlu.

5.  **Jalankan Tes**:
    * Untuk menjalankan semua tes:
        ```bash
        npx playwright test
        ```
    * Untuk menjalankan tes tertentu (misalnya, hanya file ini):
        ```bash
        npx playwright test tests/purchase-flow.spec.ts
        ```
    * Untuk membuka UI Mode Playwright (sangat berguna untuk debugging):
        ```bash
        npx playwright test --ui
        ```

6.  **Lihat Laporan**:
    Setelah tes selesai, laporan HTML akan dibuat. Buka laporan dengan:
    ```bash
    npx playwright show-report
    ```

---

*Dibuat sebagai bagian dari program magang QA.*# Playwright E2E Test - YuApp & EvaTrack Purchase Flow

Proyek ini berisi skrip otomatisasi pengujian (*end-to-end*) menggunakan **Playwright** untuk memvalidasi alur lengkap pembelian barang. Alur ini mencakup interaksi antara tiga sistem (Customer, Admin/Finance/Marketing, dan Agen EvaTrack) dan melibatkan 11 tahapan utama.

## 🚀 Fitur Utama

* **End-to-End Testing**: Menguji seluruh alur dari awal hingga akhir.
* **Page Object Model (POM)**: Kode terstruktur rapi menggunakan pola POM.
* **Multi-Role**: Mencakup interaksi dari berbagai peran pengguna (Customer, Admin, Finance, Marketing, Agen).
* **Environment Variables**: Menggunakan file `.env` untuk mengelola kredensial dan URL secara aman.

## 🛠️ Cara Menjalankan

1.  **Clone Repository**:
    ```bash
    git clone [https://www.fda.gov/drugs/types-applications/abbreviated-new-drug-application-anda](https://www.fda.gov/drugs/types-applications/abbreviated-new-drug-application-anda)
    cd [Nama Folder Proyek]
    ```

2.  **Instal Dependencies**:
    ```bash
    npm install
    ```
    *(Jika Anda belum menginstal browser Playwright, jalankan juga: `npx playwright install`)*

3.  **Buat File `.env`**:
    * Salin file `.env.example` (jika ada) atau buat file baru bernama `.env` di *root* proyek.
    * Isi file `.env` dengan kredensial dan URL yang sesuai untuk lingkungan pengujian Anda:
        ```env
        CUSTOMER_URL="https://..."
        CUSTOMER_WHATSAPP="...."
        CUSTOMER_PASSWORD="...."

        ADMIN_URL="https://..."
        ADMIN_USERNAME="..."
        ADMIN_PASSWORD="..."
        FINANCE_USERNAME="..."
        FINANCE_PASSWORD="..."
        MARKETING_USERNAME="..."
        MARKETING_PASSWORD="..."

        EVA_URL="https://..."
        EVA_USERNAME="..."
        EVA_PASSWORD="..."
        ```
    * **Penting**: Pastikan file `.env` sudah ditambahkan ke `.gitignore` Anda!

4.  **(Opsional) Siapkan File Bukti Bayar**:
    * Pastikan file gambar bukti bayar (misalnya `dimasganteng.png`) ada di *root* proyek atau sesuaikan path-nya di `purchase-flow.spec.ts` jika perlu.

5.  **Jalankan Tes**:
    * Untuk menjalankan semua tes:
        ```bash
        npx playwright test
        ```
    * Untuk menjalankan tes tertentu (misalnya, hanya file ini):
        ```bash
        npx playwright test tests/purchase-flow.spec.ts
        ```
    * Untuk membuka UI Mode Playwright (sangat berguna untuk debugging):
        ```bash
        npx playwright test --ui
        ```

6.  **Lihat Laporan**:
    Setelah tes selesai, laporan HTML akan dibuat. Buka laporan dengan:
    ```bash
    npx playwright show-report
    ```

---

*Dibuat sebagai bagian dari program magang QA.*
