import { Page, type Locator, expect } from '@playwright/test';

export class BillingPage {
    readonly page: Page;

    readonly $tittleMain: Locator;
    readonly $tittleProCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.$tittleMain = this.page.getByRole('heading', { name: 'Plan details & billing' });
        this.$tittleProCart = this.page.getByText('ProTrack containers and audit');
    }

    public async validateTittleMain() {
        await expect(this.$tittleMain).toBeVisible();
    }
    public async validateTittleProCart() {
        await expect(this.$tittleProCart).toBeVisible();
    }
}