import {expect, type Locator, Page} from '@playwright/test';

export class LoginPage {
    readonly page: Page;

    readonly $title: any;
    readonly $mainForm: Locator;
    readonly $boxEmail: Locator
    readonly $boxPassword: Locator
    readonly $titleForm: Locator;
    readonly $btnContinue: Locator;


    constructor(page: Page) {
        this.page = page;
        this.$title = /BlueCargo/;
        this.$titleForm = this.page.locator('h1');
        this.$mainForm = this.page.locator('form');
        this.$boxEmail = this.page.getByPlaceholder('work@email.com');
        this.$boxPassword = this.page.getByPlaceholder('password');
        this.$btnContinue = this.page.getByRole('button', { name: 'Continue' });
    }

    public async validateEmptyEmail() {
        await expect(this.$boxEmail).toBeEmpty();
    }

    public async validateEmptyPassword() {
        await expect(this.$boxPassword).toBeEmpty();
    }
    public async existTitleForm() {
        await expect(this.$titleForm).toContainText(/Sign in to BlueCargo/);
    }

    public async existTitleEmail() {
        await expect(this.$mainForm).toContainText('Email*');
    }

    public async existTitlePassword() {
        await expect(this.$mainForm).toContainText('Password*');
    }
    
    public async existTitleResetPassword() {
        await expect(this.$mainForm).toContainText('Reset your password');
    }

    public async existTitleCreateAccount() {
        await expect(this.$mainForm).toContainText('Create new account instead');
    }

    public async existBtnContinue() {
        await expect(this.$mainForm).toContainText('Continue');
    }

    public async clickFieldEmail() {
        await this.$boxEmail.click();
    }

    public async fillFieldEmail(email: string) {
        await this.$boxEmail.fill(email);
    }

    public async clickFieldPassword() {
        await this.$boxPassword.click();
    }

    public async fillFieldPassword(password: string) {
        await this.$boxPassword.fill(password);
    }

    public async clickBtnContinue() {
        await this.$btnContinue.click();
    }

}