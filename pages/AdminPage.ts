// pages/AdminPage.ts
import { type Page, type Locator, expect } from '@playwright/test';

export class AdminPage {
    readonly page: Page;

    // -- Locators --
    get orderMenuLink(): Locator {
        return this.page.getByRole('link', { name: /Order/ }).first();
    }
    get statusDropdown(): Locator {
        return this.page.locator('#status_id_bo');
    }
    get marketingDropdown(): Locator {
        return this.page.locator('#marketing_id');
    }
    get updateButton(): Locator {
        return this.page.getByRole('button', { name: /Update/ });
    }
    get successNotification(): Locator {
        return this.page.getByRole('heading', { name: 'Success' });
    }
    get approvePaymentButton(): Locator {
        return this.page.getByRole('button', { name: /APPROVE PAYMENT/i });
    }
    get confirmationModal(): Locator {
        return this.page.locator('#confirmationform');
    }
    get confirmModalSubmitButton(): Locator {
        return this.page.locator('#btn_confirm_modal_submit');
    }
    get coloadTrackingNumberInput(): Locator {
        return this.page.locator('#no_resi_coload_eva');
    }
    get evatrackTrackingNumberInput(): Locator {
        return this.page.locator('#resi_evatrack');
    }
    get localChinaNumberInput(): Locator {
        return this.page.locator('#no_local_china');
    }
    get domesticTrackingNumberInput(): Locator {
        return this.page.locator('#no_resi');
    }
    get kurirDomestikDropdown(): Locator {
        return this.page.locator('#kurir_domestik');
    }
    get additionalCostsChina(): Locator {
        return this.page.locator('div.row:has(input[value="Domestik China"])')
            .locator('input[name="tambahan_price[]"]');
    }
    get additionalCostsIndonesia(): Locator {
        return this.page.locator('div.row:has(input[value="Domestik Indonesia"])')
            .locator('input[name="tambahan_price[]"]');
    }
    get chooseFileButton(): Locator {
        return this.page.getByRole('button', { name: 'Choose File' });
    }
    get uploadButton(): Locator {
        return this.page.getByRole('button', { name: 'Upload' });
    }
    get approvePaymentLink(): Locator {
        return this.page.locator('a[href*="/prosesbukti/approve/"]');
    }
    get settingKursLink(): Locator {
        return this.page.getByRole('link', { name: /Setting Kurs/i });
    }
    get rateYuanInput(): Locator {
        return this.page.locator('#rate_yuan');
    }
    get saveRateButton(): Locator {
        return this.page.locator('button.btn-success');
    }
    get duplicateChinaNumberError(): Locator {
        return this.page.getByText(/The no local china has already been taken/);
    }
    get missingFileError(): Locator {
        return this.page.getByText(/The file field is required/);
    }
    get invoicesMenuLink(): Locator {
        return this.page.getByRole('link', { name: /Invoices/i }).first();
    }
    get seaCategoryDropdown(): Locator {
        return this.page.locator('#biaya_kategori_sea');
    }
    get panjang1Input(): Locator {
        return this.page.locator('#panjang1');
    }
    get lebar1Input(): Locator {
        return this.page.locator('#lebar1');
    }
    get tinggi1Input(): Locator {
        return this.page.locator('#tinggi1');
    }
    get volume1Input(): Locator {
        return this.page.locator('#volume1');
    }
    get airCategoryDropdown(): Locator {
        return this.page.locator('#biaya_kategori_air');
    }
    get berat2Input(): Locator {
        return this.page.locator('#berat2');
    }
    get deleteConfirmationModal(): Locator {
        return this.page.locator('#delform');
    }
    get deleteConfirmButton(): Locator {
        return this.deleteConfirmationModal.getByRole('button', { name: 'Delete' });
    }
    get usersMenuLink(): Locator {
        return this.page.getByRole('link', { name: /Users/i });
    }
    get tambahUserLink(): Locator {
        return this.page.getByRole('link', { name: 'Tambah' });
    }
    get usernameInput(): Locator {
        return this.page.getByPlaceholder('Username');
    }
    get passwordInput(): Locator {
        return this.page.getByPlaceholder('Password');
    }
    get namaInput(): Locator {
        return this.page.getByPlaceholder('Nama');
    }
    get emailInput(): Locator {
        return this.page.getByPlaceholder('Email');
    }
    get phoneInput(): Locator {
        return this.page.getByPlaceholder('phone');
    }
    get roleDropdown(): Locator {
        return this.page.locator('#role_id');
    }
    get simpanButton(): Locator {
        return this.page.getByRole('button', { name: 'Simpan' });
    }
    get usersSearchInput(): Locator {
        return this.page.getByLabel('Search:');
    }
    get customerMenuLink(): Locator {
        return this.page.getByRole('link', { name: /Customer/i });
    }
    get customerSearchInput(): Locator {
        return this.page.getByLabel('Search:');
    }
    get customerMarketingDropdown(): Locator {
        return this.page.locator('[name="marketing_id"]');
    }
    get webBannerLink(): Locator {
        return this.page.getByRole('link', { name: /Web/ });
    }
    get mobileBannerLink(): Locator {
        return this.page.getByRole('link', { name: /Mobile/ });
    }
    get subBannerLink(): Locator {
        return this.page.getByRole('link', { name: /Sub Banner/ });
    }
    get bannerUrlInput(): Locator {
        return this.page.locator('#url_href');
    }
    get bannerOrderInput(): Locator {
        return this.page.locator('#urutan');
    }
    get bannerFileInput(): Locator {
        return this.page.locator('#gambar_url');
    }
    get bannerSubmitButton(): Locator {
        return this.page.getByRole('button', { name: 'Submit' });
    }
    get bannerSearchInput(): Locator {
        return this.page.getByLabel('Search:');
    }
    get promoMenuLink(): Locator {
        return this.page.getByRole('link', { name: /Promo/ });
    }
    get tambahPromoLink(): Locator {
        return this.page.getByRole('link', { name: 'Tambah' });
    }
    get promoSearchInput(): Locator {
        return this.page.getByLabel('Search:');
    }
    get promoCodeInput(): Locator {
        return this.page.locator('input[placeholder="YUAPP100"]');
    }
    get promoDescriptionInput(): Locator {
        return this.page.locator('#deskripsi');
    }
    get promoPercentageInput(): Locator {
        return this.page.locator('input[name="persentase_potongan"]');
    }
    get promoMaxDiscountInput(): Locator {
        return this.page.locator('input[name="max_potongan"]');
    }
    get promoMinPurchaseInput(): Locator {
        return this.page.locator('input[name="minimal_pembelian"]');
    }
    get promoIsEventSelect(): Locator {
        return this.page.locator('#is_event');
    }
    get promoSaveButton(): Locator {
        return this.page.getByRole('button', { name: 'Simpan' });
    }
    get deactivateButton(): Locator {
        return this.page.getByRole('button', { name: 'Deaktivasi' });
    }
    get activateModal(): Locator {
        return this.page.locator('#aktform');
    }
    get activateButton(): Locator {
        return this.page.getByRole('button', { name: 'Aktivasi' });
    }

    // -- Dynamic Locators --
    orderRowByCustomerName(customerName: string): Locator {
        return this.page.locator('tbody tr', { hasText: customerName }).first();
    }
    userRowByUsername(username: string): Locator {
        return this.page.locator('tbody tr', { hasText: username }).first();
    }
    customerRowByCustomerName(customerName: string): Locator {
        return this.page.locator('tbody tr', { hasText: customerName }).first();
    }
    bannerRowByUrl(url: string): Locator {
        return this.page.locator('tbody tr', { hasText: url }).first();
    }
    promoRowByName(promoName: string): Locator {
        return this.page.locator('tbody tr', { hasText: promoName }).first();
    }

    constructor(page: Page) {
        this.page = page;
    }

    // -- Actions --

    async updateStatusToItemAdjustment(customerName: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.statusDropdown.selectOption({ label: 'Penyesuaian harga barang' });
        await this.updateButton.click();
    }

    async updateStatusToShippingAdjustment(customerName: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.statusDropdown.selectOption({ label: 'Penyesuaian harga pengiriman' });
        await this.updateButton.click();
    }

    async assignMarketing(customerName: string, marketerValue: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.marketingDropdown.selectOption({ value: marketerValue });
        await this.updateButton.click();
    }

    async applyShippingAdjustment(customerName: string, marketerValue: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.statusDropdown.selectOption({ label: 'Penyesuaian harga pengiriman' });
        await this.marketingDropdown.selectOption({ value: marketerValue });
        await this.updateButton.click();
    }

    async updateStatusToAwaitingPayment(customerName: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.statusDropdown.selectOption({ label: 'Menunggu pembayaran' });
        await this.updateButton.click();
    }

    async updateStatusToChinaWarehouse(customerName: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.statusDropdown.selectOption({ label: 'Pengiriman barang ke gudang china' });
        await this.updateButton.click();
    }

    async updateStatusToArrivedAtChina(customerName: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.statusDropdown.selectOption({ label: 'Barang tiba di gudang china' });
        await this.updateButton.click();
    }

    async updateStatusToArrivedAtIndonesia(customerName: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.statusDropdown.selectOption({ label: 'Barang tiba di indonesia' });
        await this.updateButton.click();
    }

    async updateStatusToInputDomesticResi(customerName: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.statusDropdown.selectOption({ label: 'Input resi domestic' });
        await this.updateButton.click();
    }

    async updateStatusToCompleted(customerName: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.statusDropdown.selectOption({ label: 'Selesai' });
        await this.updateButton.click();
    }

    async updateStatusToClaim(customerName: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.statusDropdown.selectOption({ label: 'Klaim' });
        await this.updateButton.click();
    }

    async updateStatusToCancelled(customerName: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.statusDropdown.selectOption({ label: 'Cancel Order' });
        await this.updateButton.click();
    }

    async uploadAndApproveManualPayment(customerName: string, filePath: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Bukti Pembayaran Manual').click();
        await this.chooseFileButton.setInputFiles(filePath);
        await this.uploadButton.click();
        await expect(this.successNotification).toBeVisible();

        await this.approvePaymentLink.click();
        await expect(this.successNotification).toBeVisible();
        await expect(this.approvePaymentButton).toBeVisible();
        await this.approvePaymentButton.click();
        await expect(this.confirmationModal).toBeVisible();
        await this.confirmModalSubmitButton.click();
    }

    async uploadPaymentWithoutFile(customerName: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Bukti Pembayaran Manual').click();
        await this.uploadButton.click();
    }

    async uploadProofOfGoods(customerName: string, filePath: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Upload Bukti Barang').click();
        await this.chooseFileButton.setInputFiles(filePath);
        await this.uploadButton.click();
    }

    async uploadGoodsWithoutFile(customerName: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Upload Bukti Barang').click();
        await this.uploadButton.click();
    }

    async inputColoadTrackingNumber(customerName: string, coloadTrackingNumber: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.coloadTrackingNumberInput.fill(coloadTrackingNumber);
        await this.updateButton.click();
    }

    async inputEvatrackTrackingNumber(customerName: string, evatrackTrackingNumber: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.evatrackTrackingNumberInput.fill(evatrackTrackingNumber);
        await this.updateButton.click();
    }

    async inputLocalChinaNumber(customerName: string, localChinaNumber: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.localChinaNumberInput.fill(localChinaNumber);
        await this.updateButton.click();
    }

    async inputDomesticTrackingNumber(customerName: string, domesticTrackingNumber: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.domesticTrackingNumberInput.fill(domesticTrackingNumber);
        await this.updateButton.click();
    }

    async addAdditionalCostsChina(customerName: string, additionalCosts: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.additionalCostsChina.fill(additionalCosts);
        await this.updateButton.click();
    }

    async addAdditionalCostsIndonesia(customerName: string, additionalCosts: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.additionalCostsIndonesia.fill(additionalCosts);
        await this.updateButton.click();
    }

    async selectDomesticCourier(customerName: string, domesticCourier: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.kurirDomestikDropdown.selectOption({ value: domesticCourier });
        await this.updateButton.click();
    }

    async updateYuanRate(rate: string) {
        await this.settingKursLink.click();
        await this.rateYuanInput.fill(rate);
        await this.saveRateButton.click();
    }

    async editInvoice(customerName: string, data: {
        seaCategoryValue: string,
        panjang: string,
        lebar: string,
        tinggi: string,
        airCategoryValue: string,
        berat: string
    }) {
        await this.invoicesMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();

        await this.seaCategoryDropdown.press('Enter');
        await this.seaCategoryDropdown.selectOption({ value: data.seaCategoryValue });
        await expect(this.volume1Input).toHaveValue(/.+/, { timeout: 10000 });
        await this.panjang1Input.fill(data.panjang);
        await this.panjang1Input.press('Tab');
        await this.lebar1Input.fill(data.lebar);
        await this.lebar1Input.press('Tab');
        await this.tinggi1Input.fill(data.tinggi);
        await this.tinggi1Input.press('Tab');

        await this.airCategoryDropdown.press('Enter');
        await this.airCategoryDropdown.selectOption({ value: data.airCategoryValue });
        await this.berat2Input.fill(data.berat);
        await this.berat2Input.press('Tab');

        await this.updateButton.click();
    }

    async deleteOrder(customerName: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();

        await orderRow.getByTitle('Delete').click();

        await expect(this.deleteConfirmationModal).toBeVisible();
        await this.deleteConfirmButton.click();
    }

    async addNewUser(data: {
        username: string,
        password: string,
        nama: string,
        email: string,
        phone: string,
        roleValue: string
    }) {
        await this.usersMenuLink.click();
        await this.tambahUserLink.click();

        await expect(this.usernameInput).toBeVisible();
        await this.usernameInput.fill(data.username);
        await this.passwordInput.fill(data.password);
        await this.namaInput.fill(data.nama);
        await this.emailInput.fill(data.email);
        await this.phoneInput.fill(data.phone);
        await this.roleDropdown.selectOption({ value: data.roleValue });

        await this.simpanButton.click();
    }

    async deleteUser(username: string) {
        await this.usersMenuLink.click();
        await expect(this.usersSearchInput).toBeVisible();
        await this.usersSearchInput.fill(username);

        const userRow = this.userRowByUsername(username);
        await expect(userRow).toBeVisible();
        await userRow.getByTitle('Delete').click();

        await expect(this.deleteConfirmationModal).toBeVisible();
        await this.deleteConfirmButton.click();
    }

    async editUsername(usernameToFind: string, newUsername: string) {
        await this.usersMenuLink.click();
        await expect(this.usersSearchInput).toBeVisible();
        await this.usersSearchInput.fill(usernameToFind);

        const userRow = this.userRowByUsername(usernameToFind);
        await expect(userRow).toBeVisible();
        await userRow.getByTitle('Edit').click();

        await expect(this.usernameInput).toBeVisible();
        await this.usernameInput.fill(newUsername);
        await this.updateButton.click();
    }

    async editPassword(usernameToFind: string, newPassword: string) {
        await this.usersMenuLink.click();
        await expect(this.usersSearchInput).toBeVisible();
        await this.usersSearchInput.fill(usernameToFind);

        const userRow = this.userRowByUsername(usernameToFind);
        await expect(userRow).toBeVisible();
        await userRow.getByTitle('Edit').click();

        await expect(this.passwordInput).toBeVisible();
        await this.passwordInput.fill(newPassword);
        await this.updateButton.click();
    }

    async editName(usernameToFind: string, newName: string) {
        await this.usersMenuLink.click();
        await expect(this.usersSearchInput).toBeVisible();
        await this.usersSearchInput.fill(usernameToFind);

        const userRow = this.userRowByUsername(usernameToFind);
        await expect(userRow).toBeVisible();
        await userRow.getByTitle('Edit').click();

        await expect(this.namaInput).toBeVisible();
        await this.namaInput.fill(newName);
        await this.updateButton.click();
    }

    async editEmail(usernameToFind: string, newEmail: string) {
        await this.usersMenuLink.click();
        await expect(this.usersSearchInput).toBeVisible();
        await this.usersSearchInput.fill(usernameToFind);

        const userRow = this.userRowByUsername(usernameToFind);
        await expect(userRow).toBeVisible();
        await userRow.getByTitle('Edit').click();

        await expect(this.emailInput).toBeVisible();
        await this.emailInput.fill(newEmail);
        await this.updateButton.click();
    }

    async editPhone(usernameToFind: string, newPhone: string) {
        await this.usersMenuLink.click();
        await expect(this.usersSearchInput).toBeVisible();
        await this.usersSearchInput.fill(usernameToFind);

        const userRow = this.userRowByUsername(usernameToFind);
        await expect(userRow).toBeVisible();
        await userRow.getByTitle('Edit').click();

        await expect(this.phoneInput).toBeVisible();
        await this.phoneInput.fill(newPhone);
        await this.updateButton.click();
    }

    async editRole(usernameToFind: string, newRoleValue: string) {
        await this.usersMenuLink.click();
        await expect(this.usersSearchInput).toBeVisible();
        await this.usersSearchInput.fill(usernameToFind);

        const userRow = this.userRowByUsername(usernameToFind);
        await expect(userRow).toBeVisible();
        await userRow.getByTitle('Edit').click();

        await expect(this.roleDropdown).toBeVisible();
        await this.roleDropdown.selectOption({ value: newRoleValue });
        await this.updateButton.click();
    }

    async resetUser(data: {
        username: string,
        password: string,
        nama: string,
        email: string,
        phone: string,
        roleValue: string
    }, usernameToFind: string) {
        await this.usersMenuLink.click();

        await expect(this.usersSearchInput).toBeVisible();
        await this.usersSearchInput.fill(usernameToFind);

        const userRow = this.userRowByUsername(usernameToFind);
        await expect(userRow).toBeVisible();
        await userRow.getByTitle('Edit').click();

        await expect(this.usernameInput).toBeVisible();
        await this.usernameInput.fill(data.username);
        await this.passwordInput.fill(data.password);
        await this.namaInput.fill(data.nama);
        await this.emailInput.fill(data.email);
        await this.phoneInput.fill(data.phone);
        await this.roleDropdown.selectOption({ value: data.roleValue });

        await this.updateButton.click();
    }

    async editMarketingInCustomer(customerName: string, marketingValue: string) {
        await this.customerMenuLink.click();
        await expect(this.customerSearchInput).toBeVisible();
        await this.customerSearchInput.fill(customerName);

        const customerRow = this.customerRowByCustomerName(customerName);
        await expect(customerRow).toBeVisible();
        await customerRow.getByTitle('Edit').click();

        await expect(this.customerMarketingDropdown).toBeVisible();
        await this.customerMarketingDropdown.selectOption({ value: marketingValue });

        await this.updateButton.click();
    }

    async forceOpenBannerMenu() {
        await this.page.locator('.nav-item-submenu:has-text("Banner") .nav-group-sub').evaluate((element) => {
            (element as HTMLElement).style.display = 'block';
        });
    }

    async addWebBanner(url: string, order: string, filePath: string) {
        await this.forceOpenBannerMenu();
        await this.webBannerLink.click();
        await expect(this.page).toHaveURL(/banners/);

        await this.bannerUrlInput.fill(url);
        await this.bannerOrderInput.fill(order);
        await this.bannerFileInput.setInputFiles(filePath);

        await this.bannerSubmitButton.click();
    }

    async deleteWebBanner(url: string) {
        await this.forceOpenBannerMenu();
        await this.webBannerLink.click();

        await this.bannerSearchInput.fill(url);

        const bannerRow = this.bannerRowByUrl(url);
        await expect(bannerRow).toBeVisible();
        await bannerRow.getByTitle('Hapus').click();

        await expect(this.deleteConfirmationModal).toBeVisible();
        await this.deleteConfirmButton.click();
    }

    async addMobileBanner(url: string, order: string, filePath: string) {
        await this.forceOpenBannerMenu();
        await this.mobileBannerLink.click();
        await expect(this.page).toHaveURL(/banners-mobile/);

        await this.bannerUrlInput.fill(url);
        await this.bannerOrderInput.fill(order);
        await this.bannerFileInput.setInputFiles(filePath);

        await this.bannerSubmitButton.click();
    }

    async deleteMobileBanner(url: string) {
        await this.forceOpenBannerMenu();
        await this.mobileBannerLink.click();

        await this.bannerSearchInput.fill(url);

        const bannerRow = this.bannerRowByUrl(url);
        await expect(bannerRow).toBeVisible();
        await bannerRow.getByTitle('Hapus').click();

        await expect(this.deleteConfirmationModal).toBeVisible();
        await this.deleteConfirmButton.click();
    }

    async addSubBanner(url: string, positionValue: string, filePath: string) {
        await this.forceOpenBannerMenu();
        await this.subBannerLink.click();
        await expect(this.page).toHaveURL(/subbanners/);

        await this.bannerUrlInput.fill(url);
        await this.bannerOrderInput.selectOption({ value: positionValue });
        await this.bannerFileInput.setInputFiles(filePath);

        await this.bannerSubmitButton.click();
    }

    async deleteSubBanner(url: string) {
        await this.forceOpenBannerMenu();
        await this.subBannerLink.click();

        await this.bannerSearchInput.fill(url);

        const bannerRow = this.bannerRowByUrl(url);
        await expect(bannerRow).toBeVisible();
        await bannerRow.getByTitle('Hapus').click();

        await expect(this.deleteConfirmationModal).toBeVisible();
        await this.deleteConfirmButton.click();
    }

    async addPromo(data: {
        code: string,
        description: string,
        percentage: string,
        maxDiscount: string,
        minPurchase: string,
        isEvent: string
    }) {
        await this.promoMenuLink.click();
        await this.tambahPromoLink.click();
        await expect(this.page).toHaveURL(/masterpromo\/create/);

        await this.promoCodeInput.fill(data.code);
        await this.promoDescriptionInput.fill(data.description);
        await this.promoPercentageInput.fill(data.percentage);
        await this.promoMaxDiscountInput.fill(data.maxDiscount);
        await this.promoMinPurchaseInput.fill(data.minPurchase);
        await this.promoIsEventSelect.selectOption(data.isEvent);

        await this.promoSaveButton.click();
    }

    async deactivatePromo(promoName: string) {
        await this.promoMenuLink.click();
        await this.promoSearchInput.fill(promoName);

        const promoRow = this.promoRowByName(promoName);
        await expect(promoRow).toBeVisible();
        await promoRow.getByTitle('Delete').click();

        await expect(this.deleteConfirmationModal).toBeVisible();
        await this.deactivateButton.click();
    }

    async activatePromo(promoName: string) {
        await this.promoMenuLink.click();
        await this.promoSearchInput.fill(promoName);

        const promoRow = this.promoRowByName(promoName);
        await expect(promoRow).toBeVisible();
        await promoRow.getByTitle('Aktivasi').click();

        await expect(this.activateModal).toBeVisible();
        await this.activateButton.click();
        await this.verifysuccessNotification();
    }

    async editPromo(promoName: string, dataToUpdate: {
        description?: string,
        maxDiscount?: string,
        minPurchase?: string,
        percentage?: string
    }) {
        await this.promoMenuLink.click();
        await this.promoSearchInput.fill(promoName);

        const promoRow = this.promoRowByName(promoName);
        await expect(promoRow).toBeVisible();
        await promoRow.getByTitle('Edit').click();

        // Update field hanya jika data disediakan
        if (dataToUpdate.description) {
            await this.promoDescriptionInput.fill(dataToUpdate.description);
        }
        if (dataToUpdate.maxDiscount) {
            await this.promoMaxDiscountInput.fill(dataToUpdate.maxDiscount);
        }
        if (dataToUpdate.minPurchase) {
            await this.promoMinPurchaseInput.fill(dataToUpdate.minPurchase);
        }
        if (dataToUpdate.percentage) {
            await this.promoPercentageInput.fill(dataToUpdate.percentage);
        }

        await this.promoSaveButton.click();
        await this.verifysuccessNotification();
    }

    // -- Verifications --
    async verifysuccessNotification() {
        await expect(this.successNotification).toBeVisible();
    }

    async verifyDuplicateChinaNumberError() {
        await expect(this.duplicateChinaNumberError).toBeVisible();
    }

    async verifyMissingFileError() {
        await expect(this.missingFileError).toBeVisible();
    }
}