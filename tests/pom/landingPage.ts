import {expect, type Locator, Page} from '@playwright/test';

export class LandingPage {

    readonly page: Page;

    readonly $title: any;
    readonly $profileCart: Locator;
    readonly $messageWelcome: Locator;
    readonly $optionLogout: Locator;
    readonly $profileCartInfo: Locator;

    readonly $emptyReturnAppointment: Locator;
    readonly $allShipments: Locator;
    readonly $dandDDashboard: Locator;
    readonly $startYourDispute: Locator;
    readonly $trackYourDisputes: Locator;


    constructor(page: Page) {
        this.page = page;
        this.$title = /BlueCargo/;
        this.$profileCartInfo = this.page.locator('#app-page-template-root');
        this.$messageWelcome = this.page.locator('#app-page-template-content');
        this.$optionLogout = this.page.getByRole('heading', { name: 'Log Out' })
        this.$profileCart = this.page.getByText('tetest-') 
        
        this.$emptyReturnAppointment = this.page.getByRole('link', { name: 'Empty return appointments' })
        this.$allShipments = this.page.getByRole('link', { name: 'All shipments See all your' });
        this.$dandDDashboard = this.page.getByRole('link', { name: 'D&D dashboard Overview of' });
        this.$startYourDispute = this.page.getByRole('link', { name: 'Start your dispute Upload' });
        this.$trackYourDisputes = this.page.getByRole('link', { name: 'Track your disputes Track' });
    }   

    public async validateProfileEmailInfo(email: string) {
        await expect(this.$profileCartInfo).toContainText(email);
    }

    public async validateWelcomeMessage(name: string) {
        await expect(this.$messageWelcome).toContainText(`Hello ${name},`);
    }
    
    public async clickProfileCart() {
        await this.$profileCart.click();
    }

    public async clickOptionLogout() {
        await this.$optionLogout.click();
    }

    public async clickEmptyReturnAppointment() {
        await this.$emptyReturnAppointment.click();
    }
    
    public async clickAllShipments() {
        await this.$allShipments.click();
    }

    public async clickDandDDashboard() {
        await this.$dandDDashboard.click();
    }

    public async clickStartYourDispute() {
        await this.$startYourDispute.click();
    }
    
    public async clickTrackYourDisputes() {
        await this.$trackYourDisputes.click();
    }
}
