// pages/CustomerPage.ts
import { type Page, type Locator, expect } from '@playwright/test';

export class CustomerPage {
    readonly page: Page;

    // -- Locators --
    get masukButton(): Locator {
        return this.page.getByRole('button', { name: 'Masuk' }).first();
    }

    get whatsappInput(): Locator {
        return this.page.getByRole('textbox', { name: 'Masukkan Nomor WhatsApp Anda' });
    }

    get passwordInput(): Locator {
        return this.page.getByRole('textbox', { name: 'Masukkan Kata Sandi' });
    }

    get formLoginButton(): Locator {
        return this.page.getByRole('button', { name: 'Masuk' });
    }

    get keranjangButton(): Locator {
        return this.page.getByRole('button', { name: 'Keranjang' });
    }

    get shoppingCartIcon(): Locator {
        return this.page.getByTestId('ShoppingCartOutlinedIcon');
    }

    get pesanLink(): Locator {
        return this.page.getByRole('link', { name: 'Pesan' });
    }

    get transactionListLink(): Locator {
        return this.page.getByRole('link', { name: 'Daftar Transaksi' });
    }

    get buatPesananButton(): Locator {
        return this.page.getByRole('button', { name: 'Buat Pesanan' });
    }

    get successMessageHeading(): Locator {
        return this.page.getByRole('dialog').filter({
            hasText: /Pesanan Anda Berhasil Dibuat!/i
        });
    }

    get successAlert(): Locator {
        return this.page.getByText('Produk berhasil ditambahkan ke keranjang');
    }

    get successDelete(): Locator {
        return this.page.getByText('1 produk dihapus dari keranjang');
    }

    get errorChehckOut(): Locator {
        return this.page.getByText(/Minimum purchase is Rp\. [\d.,]+/);
    }

    get profileButton(): Locator {
        return this.page.locator('button:has(div.MuiAvatar-root)');
    }

    get transactionListMenuItem(): Locator {
        return this.page.getByRole('menuitem', { name: 'Daftar Transaksi' });
    }

    get paymentMethodDropdown(): Locator {
        return this.page.getByRole('button', { name: 'Belum ada metode terpilih' });
    }

    get confirmPaymentButton(): Locator {
        return this.page.getByRole('button', { name: 'Pilih Metode Pembayaran' });
    }

    get checkoutButton(): Locator {
        return this.page.getByRole('button', { name: 'Checkout' });
    }

    get productContainer() {
        return this.page.locator('.MuiStack-root.mui-1187icl');
    }

    get dialogCancelTransaction() {
        return this.page.getByRole('dialog');
    }

    get confirmCancelTransaction() {
        return this.page.getByRole('dialog').getByRole('button', { name: 'Ya' });
    }

    get successCancelTransaction(): Locator {
        return this.page.getByText('Transaksi dibatalkan');
    }

    get appliedPromoContainer(): Locator {
        return this.page.locator('div:has([data-testid="CheckCircleRoundedIcon"])');
    }

    get removePromoButton(): Locator {
        return this.appliedPromoContainer
            .locator('button:has([data-testid="CloseRoundedIcon"])');
    }

    get inputPromo(): Locator {
        return this.page.getByPlaceholder('Masukkan Kode Promo');
    }

    get terapkanButton(): Locator {
        return this.page.getByRole('button', { name: 'Terapkan' });
    }

    get errorPaymentBank(): Locator {
        return this.page.getByText('Error, Checkout Fail. Please try again');
    }

    get errorPaymentPromo(): Locator {
        return this.page.getByText('Transaksi gagal, Promo sudah tidak dapat digunakan. Gunakan promo lain');
    }

    get checkedProductContainer() {
        return this.productContainer.filter({
            has: this.page.locator('input[type="checkbox"]:checked')
        });
    }

    get productLinkInCart(): Locator {
        return this.page.getByRole('link', { name: 'Tampilkan Semua' });
    }

    get cameraIcon(): Locator {
        return this.page.getByTestId('CameraAltIcon');
    }

    get imageSearchInput(): Locator {
        return this.page.locator('label[for="image-search-desktop"]');
    }

    get searchSuccessMessage(): Locator {
        return this.page.getByText(/Ditemukan \d+ produk/);
    }

    get searchNotFoundMessage(): Locator {
        return this.page.getByText('Gambar tidak ditemukan. Silakan coba gambar lain.');
    }

    get invalidFormatMessage(): Locator {
        return this.page.getByText('Format gambar yang didukung adalah JPG dan PNG');
    }

    get addLinkIcon(): Locator {
        return this.page.getByTestId('AddLinkRoundedIcon');
    }

    get linkSearchDialog(): Locator {
        return this.page.getByRole('dialog', { name: 'Cari Berdasarkan Tautan' });
    }

    get linkSearchDialogTextbox(): Locator {
        return this.linkSearchDialog.getByRole('textbox');
    }

    get linkSearchDialogCariButton(): Locator {
        return this.linkSearchDialog.getByRole('button', { name: 'Cari' });
    }

    get linkSearchDialogErrorMessage(): Locator {
        return this.linkSearchDialog.getByText('Tautan tidak valid');
    }

    get successDialogTransactionListLink(): Locator {
        return this.successMessageHeading.getByRole('link', { name: 'Daftar Transaksi' });
    }

    // -- Dynamic Locators (berdasarkan parameter) --

    promoContainerByName(promoName: string) {
        return this.appliedPromoContainer.filter({
            hasText: new RegExp(promoName, 'i')
        }).first();
    }

    checkboxInContainer(container: Locator) {
        return container.getByRole('checkbox');
    }

    productLinkByName(productName: string): Locator {
        return this.page.getByRole('link', { name: new RegExp(productName.trim(), 'i') }).first();
    }

    checkboxByProductName(productName: string): Locator {
        return this.page.locator('.MuiStack-root.mui-1187icl', { hasText: new RegExp(productName, 'i') })
            .getByRole('checkbox');
    }

    deleteByProductName(productName: string): Locator {
        return this.page.locator('.MuiStack-root.mui-1187icl', { hasText: new RegExp(productName, 'i') })
            .getByTestId('DeleteOutlineRoundedIcon');
    }

    checkoutPageHeading(productName: string): Locator {
        return this.page.locator('.MuiStack-root.mui-1fkwys2', { hasText: new RegExp(productName, 'i') });
    }

    transaksiContainerByProductName(productName: string): Locator {
        return this.page.locator('.MuiBox-root.mui-1i31c9e')
            .filter({ hasText: productName })
    }

    pilihPengirimanLink(productName: string): Locator {
        return this.transaksiContainerByProductName(productName)
            .filter({ hasText: 'Menunggu pembayaran' })
            .getByRole('link', { name: 'Pilih Pengiriman' })
            .first();
    }

    detailTransaksiLink(productName: string): Locator {
        return this.transaksiContainerByProductName(productName)
            // .filter({ hasText: 'Sedang dihitung' })
            .getByRole('link', { name: 'Detail Transaksi' })
            .first();
    }

    batalTransaksiLink(productName: string): Locator {
        return this.transaksiContainerByProductName(productName)
            .filter({ hasText: 'Menunggu pembayaran' })
            .getByRole('button', { name: 'Batalkan Transaksi' })
            .first();
    }

    productContainerByName(productName: string) {
        return this.productContainer.filter({
            hasText: new RegExp(productName, 'i')
        });
    }

    shippingMethodLabel(shippingMethod: string): Locator {
        return this.page.locator('label', { hasText: new RegExp(`Pengiriman Via ${shippingMethod}`) });
    }

    paymentMethodRadio(bankName: string): Locator {
        return this.page.getByRole('radio', { name: new RegExp(bankName, 'i') });
    }

    paymentPageVerificationElement(bankName: string): Locator {
        return this.page.locator('.mui-1ax0uoq')
            .filter({ hasText: `${bankName} Virtual Account` });
    }

    detailPageProductLink(productName: string): Locator {
        return this.page.getByRole('link', { name: new RegExp(productName.trim(), 'i') }).first();
    }

    constructor(page: Page) {
        this.page = page;
    }

    // -- Actions --
    async goto() {
        await this.page.goto(process.env.CUSTOMER_URL!);
    }

    async login(whatsapp: string, password: string) {
        await this.masukButton.click();
        await this.whatsappInput.fill(whatsapp);
        await this.passwordInput.fill(password);
        await this.formLoginButton.click();
        await this.verifyLoginSuccess();
    }

    async addProductToCart(productName: string) {
        await this.verifyPageSuccess(productName);
        await this.productLinkByName(productName).click();
        await expect(this.keranjangButton).toBeVisible({ timeout: 20000 });
        await this.keranjangButton.click();
        await expect(this.successAlert).toBeVisible({ timeout: 10000 });
        await expect(this.successAlert).toBeHidden({ timeout: 10000 });
        await this.shoppingCartIcon.click();
        await this.productLinkInCart.click();
        await expect(this.productContainerByName(productName)).toBeVisible();
    }

    async checkoutProduct(productName: string) {
        await this.shoppingCartIcon.click();
        await this.productLinkInCart.click();
        await this.selectProductCheckbox(productName);
        await this.pesanLink.click();
        await expect(this.checkoutPageHeading(productName)).toBeVisible({ timeout: 20000 });
    }

    async selectProductCheckbox(productName: string) {
        const targetContainer = this.productContainerByName(productName);
        const targetCheckbox = this.checkboxInContainer(targetContainer);

        const isTargetChecked = await targetCheckbox.isChecked();

        if (!isTargetChecked) {
            // --- Uncheck semua item lain yang sedang tercentang ---
            const checkedCount = await this.checkedProductContainer.count();

            for (let i = 0; i < checkedCount; i++) {
                const checkedContainer = this.checkedProductContainer.nth(i);
                const containerText = await checkedContainer.textContent();

                // Hanya uncheck jika bukan produk target
                if (!containerText?.match(new RegExp(productName, 'i'))) {
                    await this.checkboxInContainer(checkedContainer).click();
                    await this.page.waitForTimeout(2000);
                }
            }

            // --- Centang produk target ---
            await targetCheckbox.click();
            await this.page.waitForTimeout(3000);

        } else {
            // --- Jika sudah tercentang, pastikan hanya produk ini yang aktif ---
            const totalContainers = await this.productContainer.count();

            for (let i = 0; i < totalContainers; i++) {
                const container = this.productContainer.nth(i);
                const checkbox = this.checkboxInContainer(container);
                const isChecked = await checkbox.isChecked();

                if (isChecked) {
                    const text = await container.textContent();
                    if (!text?.match(new RegExp(productName, 'i'))) {
                        await checkbox.uncheck();
                        await this.page.waitForTimeout(3000);
                    }
                }
            }
        }

        // --- Verifikasi bahwa hanya produk target yang tercentang ---
        await expect(targetCheckbox).toBeChecked({ timeout: 20000 });
    }

    async unselectProductCheckbox(productName: string) {
        const targetContainer = this.productContainerByName(productName);
        const targetCheckbox = this.checkboxInContainer(targetContainer);

        // --- Iterasi semua container dan uncheck yang tercentang ---
        const totalContainers = await this.productContainer.count();

        for (let i = 0; i < totalContainers; i++) {
            const container = this.productContainer.nth(i);
            const checkbox = this.checkboxInContainer(container);

            const isChecked = await checkbox.isChecked();

            if (isChecked) {
                await checkbox.click();
                await this.page.waitForTimeout(2000);
            }
        }

        // --- Verifikasi bahwa produk target tidak tercentang ---
        await expect(targetCheckbox).not.toBeChecked({ timeout: 20000 });

        // --- Verifikasi bahwa TIDAK ADA item yang tercentang ---
        await expect(this.checkedProductContainer).toHaveCount(0, { timeout: 5000 });
    }

    async deleteProduct(productName: string) {
        await this.shoppingCartIcon.click();
        await this.productLinkInCart.click();
        await expect(this.productContainerByName(productName)).toBeVisible();
        await this.unselectProductCheckbox(productName);
        await expect(this.deleteByProductName(productName)).toBeVisible();
        await this.deleteByProductName(productName).click();
        await expect(this.successDelete).toBeVisible({ timeout: 10000 });
        await expect(this.successDelete).toBeHidden({ timeout: 10000 });
    }

    async createOrder() {
        await this.buatPesananButton.click();
        await this.verifyOrderCreationSuccess();
    }

    async createOrderUnder() {
        await this.buatPesananButton.click();
        await expect(this.errorChehckOut).toBeVisible({ timeout: 20000 });
    }

    async navigateToTransactionList() {
        await this.profileButton.click();
        await this.transactionListMenuItem.click();
    }

    async selectShippingForOrder(productName: string) {
        await expect(this.pilihPengirimanLink(productName)).toBeVisible({ timeout: 10000 });
        await this.pilihPengirimanLink(productName).click();
    }

    async transactionDetailForOrder(productName: string) {
        await expect(this.detailTransaksiLink(productName)).toBeVisible({ timeout: 10000 });
        await this.detailTransaksiLink((productName)).click();
        await this.page.waitForURL('**/transaction/**');
    }

    async cancelTransactionForOrder(productName: string) {
        await expect(this.batalTransaksiLink(productName)).toBeVisible({ timeout: 20000 });
        await this.batalTransaksiLink((productName)).click();
        await expect(this.dialogCancelTransaction).toBeVisible();
        await this.confirmCancelTransaction.click();
    }

    async removePromoIfExists(): Promise<void> {
        // Cek apakah tombol hapus promo terlihat
        if (await this.removePromoButton.isVisible()) {
            // Jika terlihat, klik tombolnya
            await this.removePromoButton.click();
            // Tunggu sejenak (pertimbangkan wait for state/element)
            await this.page.waitForTimeout(2000);
        }
        // Jika tidak terlihat, fungsi ini selesai tanpa melakukan apa-apa.
    }

    async chooseShippingAndPaymentPromo(shippingMethod: string, bankName: string, promoName: string) {
        await this.shippingMethodLabel(shippingMethod).click();
        await this.paymentMethodDropdown.click();
        await this.paymentMethodRadio(bankName).check();
        await this.confirmPaymentButton.click();
        await this.page.waitForLoadState('networkidle');

        const activePromoCount = await this.appliedPromoContainer.count();

        if (activePromoCount > 0) {
            const correctPromoIsActive = await this.promoContainerByName(promoName).count() > 0;

            if (!correctPromoIsActive) {
                await this.removePromoButton.click();
                await this.page.waitForTimeout(2000);
                await this.applyPromoCode(promoName);
            }
        } else {
            await this.applyPromoCode(promoName);
        }
        await this.checkoutButton.click();
    }

    async applyPromoCode(promoName: string) {
        await this.inputPromo.fill(promoName);
        await this.inputPromo.press('Enter');
        await expect(this.promoContainerByName(promoName)).toBeVisible({ timeout: 10000 });
    }

    async chooseShippingAndPaymentWithoutPromo(shippingMethod: string, bankName: string) {
        await this.shippingMethodLabel(shippingMethod).click();
        await this.paymentMethodDropdown.click();
        await this.paymentMethodRadio(bankName).check();
        await this.confirmPaymentButton.click();
        await this.page.waitForLoadState('networkidle');
        await this.removePromoIfExists();
        await expect(this.inputPromo).toBeVisible();
        await this.checkoutButton.click();
    }

    async searchByImage(filePath: string) {
        await this.cameraIcon.click();
        await this.imageSearchInput.setInputFiles(filePath);
    }

    async searchByLink(url: string) {
        await this.addLinkIcon.click();
        await expect(this.linkSearchDialog).toBeVisible();
        await this.linkSearchDialogTextbox.fill(url);
        await this.linkSearchDialogCariButton.click();
    }

    // -- Verifications --
    async verifyLoginSuccess() {
        await expect(this.page.getByRole('link', { name: 'YuApp' })).toBeVisible({ timeout: 10000 });
    }

    async verifyProductName(productName: string) {
        await expect(this.page.getByText(productName)).toBeVisible({ timeout: 10000 });
    }

    async verifyPageSuccess(productName: string) {
        await expect(this.productLinkByName(productName)).toBeVisible({ timeout: 10000 });
    }

    async verifyOrderCreationSuccess() {
        await expect(this.successMessageHeading).toBeVisible({ timeout: 20000 });
    }

    async verifyDeleteProduct(productName: string) {
        await this.shoppingCartIcon.click();
        await this.productLinkInCart.click();
        await expect(this.productContainerByName(productName)).toBeHidden({ timeout: 20000 });
    }

    async verifyPaymentPage(bankName: string) {
        await expect(this.paymentPageVerificationElement(bankName)).toBeVisible({ timeout: 20000 });
    }

    async errorPaymentBankPage() {
        await expect(this.errorPaymentBank).toBeVisible({ timeout: 10000 });
    }

    async errorPaymentPromoPage() {
        await expect(this.errorPaymentPromo).toBeVisible({ timeout: 10000 });
    }

    async verifyCancelTransaction() {
        await expect(this.successCancelTransaction).toBeVisible({ timeout: 10000 });
    }

    async verifySearchByImageSuccess() {
        await expect(this.searchSuccessMessage).toBeVisible({ timeout: 50000 });
    }

    async verifySearchByImageNotFound() {
        await expect(this.searchNotFoundMessage).toBeVisible({ timeout: 50000 });
    }

    async verifySearchByImageInvalidFormat() {
        await expect(this.invalidFormatMessage).toBeVisible({ timeout: 2000 });
    }

    async verifySearchByLinkSuccess() {
        // await expect(this.page.locator('p', { hasText: new RegExp(partialProductName.trim(), 'i') })).toBeVisible({ timeout: 8000 });
        await expect(this.keranjangButton).toBeVisible({ timeout: 8000 });
    }

    async verifySearchByLinkInvalid() {
        await expect(this.linkSearchDialogErrorMessage).toBeVisible({ timeout: 800 });
    }

    async verifyTransactionCreated(productName: string) {
        await this.successDialogTransactionListLink.click();
        await expect(this.transaksiContainerByProductName(productName).first()).toBeVisible({ timeout: 10000 });
        await this.detailTransaksiLink(productName).click();
        await this.page.waitForURL('**/transaction/**');
        await expect(this.detailPageProductLink(productName)).toBeVisible({ timeout: 10000 });
    }

}