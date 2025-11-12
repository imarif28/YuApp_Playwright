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
    get chooseFileButton(): Locator {
        return this.page.getByRole('button', { name: 'Choose File' });
    }
    get uploadButton(): Locator {
        return this.page.getByRole('button', { name: 'Upload' });
    }
    get approvePaymentLink(): Locator {
        // Locator spesifik untuk link approve setelah upload
        return this.page.locator('a[href*="/prosesbukti/approve/"]');
    }

    get settingKursLink(): Locator {
        return this.page.getByRole('link', { name: /Setting Kurs/i });
    }
    get rateYuanInput(): Locator {
        return this.page.locator('#rate_yuan');
    }
    get saveRateButton(): Locator {
        return this.page.locator('button.btn-success'); // Menggunakan locator dari rekaman Anda
    }

    get duplicateChinaNumberError(): Locator {
        return this.page.getByText('The no local china has already been taken..');
    }

    // -- Dynamic Locators --
    orderRowByCustomerName(customerName: string): Locator {
        return this.page.locator('tbody tr', { hasText: customerName }).first();
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

    async assignMarketing(customerName: string, marketerName: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.marketingDropdown.selectOption({ label: marketerName });
        await this.updateButton.click();
    }

    async applyShippingAdjustment(customerName: string, marketerName: string) {
        await this.orderMenuLink.click();
        const orderRow = this.orderRowByCustomerName(customerName);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Edit').click();
        await this.statusDropdown.selectOption({ label: 'Penyesuaian harga pengiriman' });
        await this.marketingDropdown.selectOption({ label: marketerName });
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

        // Alur Approve setelah Upload
        await this.approvePaymentLink.click();
        await expect(this.successNotification).toBeVisible();
        await expect(this.approvePaymentButton).toBeVisible();
        await this.approvePaymentButton.click();
        await expect(this.confirmationModal).toBeVisible();
        await this.confirmModalSubmitButton.click();
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

    async updateYuanRate(rate: string) {
        await this.settingKursLink.click();
        await this.rateYuanInput.fill(rate);
        await this.saveRateButton.click();
    }

    // -- Verifications --
    async verifysuccessNotification() {
        await expect(this.successNotification).toBeVisible();
    }

    async verifyDuplicateChinaNumberError() {
        await expect(this.duplicateChinaNumberError).toBeVisible();
    }
}