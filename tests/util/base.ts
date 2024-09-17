import {test as base } from '@playwright/test';
import { LoginPage } from '../pom/loginPage.ts';
import { PortalPage } from '../pom/portalPage.ts';
import { LandingPage} from '../pom/landingPage.ts';
import { BillingPage } from '../pom/billingPage.ts';
import {UpgradePlanPage} from '../pom/upgradePlanPage.ts';
import {AnotherUpgradePlanPage} from '../pom/anotherUpgradePlanPage.ts';

type MyFixtures = {
    portalPage: PortalPage;
    loginPage: LoginPage;
    landingPage: LandingPage;
    billingPage: BillingPage;
    upgradePlanPage: UpgradePlanPage;
    anotherUpgradePlanPage: AnotherUpgradePlanPage;
}

export const test = base.extend<MyFixtures>({
    portalPage: async ({ page }, use) => {
        await use(new PortalPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    landingPage: async ({ page }, use) => {
        await use(new LandingPage(page));
    },
    billingPage: async ({ page }, use) => {
        await use(new BillingPage(page));
    },
    upgradePlanPage: async ({ page }, use) => {
        await use(new UpgradePlanPage(page));
    },
    anotherUpgradePlanPage: async ({ page }, use) => {
        await use(new AnotherUpgradePlanPage(page));
    }
});

export { expect } from '@playwright/test';