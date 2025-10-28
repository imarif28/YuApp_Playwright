// pages/LoginPage.ts
import { type Page, type Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    // -- Locators --
    get usernameInput(): Locator {
        return this.page.getByRole('textbox', { name: 'Username' });
    }

    get passwordInput(): Locator {
        return this.page.getByRole('textbox', { name: 'Password' });
    }

    get signInButton(): Locator {
        return this.page.getByRole('button', { name: /Sign in/ });
    }
    
    constructor(page: Page) {
        this.page = page;
    }


    // -- Actions --
    async goto() {
        await this.page.goto(process.env.ADMIN_URL!);
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
        // Menunggu sampai URL berubah menjadi /dashboard sebagai tanda login berhasil
        await this.page.waitForURL('**/dashboard');
    }
}