import { expect, Page, type Locator } from "@playwright/test";

export class UpgradePlanPage{
    readonly page: Page;

    readonly $titleMessage: Locator;
    readonly $descriptionMessage: Locator;
    readonly $upgradeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.$titleMessage = this.page.locator('h2');
        this.$descriptionMessage = this.page.getByRole('paragraph');
        this.$upgradeButton = this.page.getByRole('button', { name: 'Upgrade my account' });
    
    }

    public async validateTitleMessage() {
        await expect(this.$titleMessage).toBeVisible();
    }
    
    public async validateDescriptionMessage() {
        await expect(this.$descriptionMessage).toBeVisible();
    }

    public async validateUpgradeButton() {
        await expect(this.$upgradeButton).toBeVisible();
    }

    public async clickUpgradeButton() {
        await this.$upgradeButton.click();
    }

}