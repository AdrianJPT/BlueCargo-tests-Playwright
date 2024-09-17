import { expect, Page, type Locator } from "@playwright/test";

export class AnotherUpgradePlanPage{
    readonly page: Page;

    readonly $titleMessage: Locator;
    readonly $descriptionMessage: Locator;
    readonly $upgradeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.$descriptionMessage = this.page.locator('h1');
        this.$upgradeButton = this.page.getByRole('button', { name: 'Upgrade my plan' });
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