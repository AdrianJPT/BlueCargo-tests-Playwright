import {expect, type Locator, Page} from '@playwright/test';

export class PortalPage {
    readonly page: Page;

    readonly $title: any;
    readonly $btnLogin: Locator


    constructor(page: Page) {
        this.page = page;
        this.$title = /BlueCargo/;
        this.$btnLogin = this.page.getByRole('link', { name: 'Login' });
    }
    
    public async validateTitle(title: string) {
        await expect(this.$title).toContainText(title);
    }

    public async clickBtnLogin() {
        await this.$btnLogin.click();
    }
}