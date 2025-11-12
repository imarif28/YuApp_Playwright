// pages/EvaPage.ts
import { type Page, type Locator, expect } from '@playwright/test';

export class EvaPage {
    readonly page: Page;

    // -- Locators --
    get usernameInput(): Locator {
        return this.page.getByRole('textbox', { name: 'Username' });
    }
    get passwordInput(): Locator {
        return this.page.getByRole('textbox', { name: 'Password' });
    }
    get signInButton(): Locator {
        return this.page.getByRole('button', { name: /Sign in/i });
    }
    get receiptLink(): Locator {
        return this.page.getByRole('link', { name: ' Receipt' })
    }
    get newReceiptLink(): Locator {
        return this.page.getByRole('link', { name: 'NEW RECEIPT' });
    }
    get localChinaNumberInput(): Locator {
        return this.page.locator('#no_local_cina');
    }
    get shippingMarkInput(): Locator {
        return this.page.locator('#shipping_mark');
    }
    get coloadTrackingNumberInput(): Locator {
        return this.page.locator('#no_resi_coload');
    }
    get ekspedisiDropdown(): Locator {
        return this.page.locator('#ekspedisi_resi');
    }
    get coloadCombobox(): Locator {
        return this.page.getByRole('combobox', { name: 'COLOAD' });
    }
    get yuappTreeItem(): Locator {
        return this.page.getByRole('treeitem', { name: 'Yuapp' });
    }
    get addGoodButton(): Locator {
        return this.page.locator('#btnaddgood');
    }
    get panjangInput(): Locator {
        return this.page.locator('#panjang');
    }
    get lebarInput(): Locator {
        return this.page.locator('#lebar');
    }
    get tinggiInput(): Locator {
        return this.page.locator('#tinggi');
    }
    get beratInput(): Locator {
        return this.page.locator('#berat');
    }
    get totalCtnInput(): Locator {
        return this.page.locator('#total_ctn');
    }
    get deskripsiInput(): Locator {
        return this.page.locator('#deskripsi');
    }
    get tipeEkspedisiDropdown(): Locator {
        return this.page.locator('#tipe_ekspedisi');
    }
    get tambahBarangButton(): Locator {
        return this.page.locator('#tambahbarang');
    }
    get successNotification(): Locator {
        return this.page.getByRole('heading', { name: 'Success' }).first();
    }
    get submitReceiptButton(): Locator {
        return this.page.locator('#btnsubmitreceipt');
    }
    get finalDeliverButton(): Locator {
        return this.page.locator('#btn-deliver');
    }
    get unstuffingIndonesiaLink(): Locator {
        return this.page.getByRole('link', { name: 'Unstuffing Indonesia' });
    }
    get unstuffingCartonLink(): Locator {
        return this.page.getByRole('link', { name: 'UNSTUFFING CARTON' });
    }
    get destinationPortDropdown(): Locator {
        return this.page.getByLabel('Destination Port');
    }
    get directTreeItem(): Locator {
        return this.page.getByRole('treeitem', { name: '(Direct)' });
    }
    get containerNumberDropdown(): Locator {
        return this.page.getByLabel('No. Container');
    }
    get coloadTreeItem(): Locator {
        return this.page.getByRole('treeitem', { name: 'COLOAD' });
    }
    get filterButton(): Locator {
        return this.page.locator('#btn-filter');
    }
    get moveAllButton(): Locator {
        return this.page.locator('#btn-move-all');
    }
    get moveForm(): Locator {
        return this.page.locator('#moveform');
    }
    get confirmMoveAllButton(): Locator {
        return this.page.getByRole('button', { name: 'Pindah Semua' });
    }
    get warehouseIndonesiaLink(): Locator {
        return this.page.getByRole('link', { name: 'Warehouse Indonesia' });
    }
    get chooseShippingDropdown(): Locator {
        return this.page.getByRole('combobox', { name: '-- Choose Shipping --' });
    }
    get btnShipping(): Locator {
        return this.page.locator('#btn_shipping');
    }
    get filterSearchbox(): Locator {
        return this.page.getByRole('searchbox', { name: 'Filter' });
    }
    get finalizeForm(): Locator {
        return this.page.locator('#wareindotodoneform');
    }
    get confirmFinalizeButton(): Locator {
        return this.page.getByRole('button', { name: 'Ya, Selesaikan' });
    }

    // -- Dynamic Locators --
    shippingPathRadio(jalurPengiriman: string): Locator {
        return this.page.getByRole('radio', { name: jalurPengiriman })
    }
    deliveryLink(deliveryType: string): Locator {
        return this.page.getByRole('link', { name: `Deliveries By Coload (${deliveryType})` });
    }
    orderRowByShippingMark(shippingMark: string): Locator {
        return this.page.locator('tr', { hasText: shippingMark }).first();
    }

    constructor(page: Page) {
        this.page = page;
    }

    // -- Actions --
    async goto() {
        await this.page.goto(process.env.EVA_URL!);
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
        await expect(this.page).toHaveURL(/home/);
    }

    async forceOpenTrackingMenu() {
        await this.page.locator('.nav-item-submenu:has-text("Tracking") .nav-group-sub').evaluate((element) => {
            (element as HTMLElement).style.display = 'block';
        });
    }

    async agentInputNewReceipt(data: {
        no_local_cina: string,
        shipping_mark: string,
        jalur_pengiriman: string,
        panjang: string,
        lebar: string,
        tinggi: string,
        berat: string,
        total_ctn: string,
        deskripsi: string,
        no_resi_coload: string
    }) {
        await this.forceOpenTrackingMenu();
        await this.receiptLink.click();
        await this.newReceiptLink.click();
        await expect(this.page).toHaveURL(/receipt\/create/);

        await this.localChinaNumberInput.fill(data.no_local_cina);
        await this.shippingMarkInput.fill(data.shipping_mark);
        await this.ekspedisiDropdown.selectOption({ label: data.jalur_pengiriman });
        await this.coloadCombobox.click();
        await this.yuappTreeItem.click();
        await this.coloadTrackingNumberInput.fill(data.no_resi_coload);
        await this.shippingPathRadio(data.jalur_pengiriman).check();

        await expect(this.addGoodButton).toBeEnabled();
        await this.addGoodButton.click();

        await this.panjangInput.fill(data.panjang);
        await this.panjangInput.press('Tab');
        await this.lebarInput.fill(data.lebar);
        await this.lebarInput.press('Tab');
        await this.tinggiInput.fill(data.tinggi);
        await this.tinggiInput.press('Tab');
        await this.beratInput.fill(data.berat);
        await this.beratInput.press('Tab');
        await this.totalCtnInput.fill(data.total_ctn);
        await this.totalCtnInput.press('Tab');
        await this.deskripsiInput.fill(data.deskripsi);
        await this.deskripsiInput.press('Tab');
        // await this.tipeEkspedisiDropdown.selectOption({ label: data.tipe_ekspedisi });

        await expect(this.tambahBarangButton).toBeEnabled();
        await this.tambahBarangButton.click();
        await expect(this.successNotification).toBeVisible();

        await this.submitReceiptButton.click();
        await expect(this.successNotification).toBeVisible();
    }

    async agentUpdateColoadDeliveryStatus(shipping_mark: string, jalur_pengiriman: string) {
        const deliveryType = jalur_pengiriman === 'Udara' ? 'Air' : 'Sea';

        await this.forceOpenTrackingMenu();
        await this.deliveryLink(deliveryType).click();

        const orderRow = this.orderRowByShippingMark(shipping_mark);
        await expect(orderRow).toBeVisible();
        await orderRow.locator('#delivercoload').click();
        // await this.page.waitForLoadState('networkidle');
        // await expect(this.finalDeliverButton).toBeEnabled();
        await this.finalDeliverButton.click();
        await this.page.waitForTimeout(5000);
        // await this.page.waitForLoadState('networkidle');
        // await expect(this.successNotification).toBeVisible({ timeout: 5000 });
    }

    async agentUnstuffingProcess() {
        await this.forceOpenTrackingMenu();
        await this.unstuffingIndonesiaLink.click();
        await this.unstuffingCartonLink.click();

        await this.destinationPortDropdown.click();
        await this.directTreeItem.click();

        await this.page.waitForLoadState('networkidle');

        await this.containerNumberDropdown.click();
        await this.coloadTreeItem.click();
        await this.filterButton.click();

        await this.moveAllButton.click();
        await expect(this.moveForm).toBeVisible();
        await this.confirmMoveAllButton.click();

        await expect(this.successNotification).toBeVisible();
    }

    async agentFinalizeShipping(shipping_mark: string) {
        await this.forceOpenTrackingMenu();
        await this.warehouseIndonesiaLink.click();

        await this.chooseShippingDropdown.click();
        await this.directTreeItem.click();
        await this.btnShipping.click();

        await expect(this.filterSearchbox).toBeVisible();
        await this.filterSearchbox.fill(shipping_mark);

        const orderRow = this.orderRowByShippingMark(shipping_mark);
        await expect(orderRow).toBeVisible();
        await orderRow.getByTitle('Selesaikan Resi').click();

        await expect(this.finalizeForm).toBeVisible();
        await this.confirmFinalizeButton.click();

        await expect(this.successNotification.first()).toBeVisible();
    }
}