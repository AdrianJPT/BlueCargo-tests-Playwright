import { test, expect } from '../util/base';

// Test data
import { email, password } from '../data-test/data-input';

// Before Each - Login process
test.beforeEach(async ({ page, loginPage, portalPage }) => {
  await page.goto('https://www.bluecargo.io/');
  await portalPage.clickBtnLogin();

  // input email
  await loginPage.clickFieldEmail();
  await loginPage.fillFieldEmail(email);
  
  // input password
  await loginPage.clickFieldPassword();
  await loginPage.fillFieldPassword(password);

  await loginPage.clickBtnContinue();
});

// After Each - Log Out process
test.afterEach(async ({ page, landingPage, loginPage }) => {
    // Log Out 
    await landingPage.clickProfileCart();
    await landingPage.clickOptionLogout();
});

test('Validate the freemiun users cannot access pro feature - Empty Return Appointment', async ({ landingPage, upgradePlanPage, billingPage  }) => {

    // freemiun users clicks a pro feature
  await landingPage.clickEmptyReturnAppointment();
 
  // message for access the pro feature
  await upgradePlanPage.validateTitleMessage();
  await upgradePlanPage.validateDescriptionMessage();
  await upgradePlanPage.validateUpgradeButton();
  await upgradePlanPage.clickUpgradeButton();

  // validate billing page message
  await billingPage.validateTittleMain();
  await billingPage.validateTittleProCart();

});


test('Validate the freemiun users cannot access pro feature - All Shipments', async ({  landingPage, upgradePlanPage, billingPage  }) => {

  // freemiun users clicks a pro feature
  await landingPage.clickAllShipments();
 
  // message for access the pro feature
  await upgradePlanPage.validateTitleMessage();
  await upgradePlanPage.validateDescriptionMessage();
  await upgradePlanPage.validateUpgradeButton();
  await upgradePlanPage.clickUpgradeButton();

  // validate billing page message
  await billingPage.validateTittleMain();
  await billingPage.validateTittleProCart();

});

test('Validate the freemiun users cannot access pro feature - D&D Dashboard', async ({  landingPage, upgradePlanPage, billingPage  }) => {

  // freemiun users clicks a pro feature
  await landingPage.clickDandDDashboard();
 
  // message for access the pro feature
  await upgradePlanPage.validateTitleMessage();
  await upgradePlanPage.validateDescriptionMessage();
  await upgradePlanPage.validateUpgradeButton();
  await upgradePlanPage.clickUpgradeButton();

  // validate billing page message
  await billingPage.validateTittleMain();
  await billingPage.validateTittleProCart();

});


test('Validate the freemiun users cannot access pro feature - Start your Dispute', async ({ page,portalPage, loginPage, landingPage, upgradePlanPage, anotherUpgradePlanPage, billingPage  }) => {

  // freemiun users clicks a pro feature
  await landingPage.clickStartYourDispute();
 
  // message for access the pro feature
  await anotherUpgradePlanPage.validateDescriptionMessage();
  await anotherUpgradePlanPage.validateUpgradeButton();
  await anotherUpgradePlanPage.clickUpgradeButton();

  // validate billing page message
  await billingPage.validateTittleMain();
  await billingPage.validateTittleProCart();
});


test('Validate the freemiun users cannot access pro feature - Track your Dispute', async ({ page,portalPage, loginPage, landingPage, upgradePlanPage, anotherUpgradePlanPage, billingPage  }) => {

  // freemiun users clicks a pro feature
  await landingPage.clickTrackYourDisputes();
 
  // message for access the pro feature
  await anotherUpgradePlanPage.validateDescriptionMessage();
  await anotherUpgradePlanPage.validateUpgradeButton();
  await anotherUpgradePlanPage.clickUpgradeButton();

  // validate billing page message
  await billingPage.validateTittleMain();
  await billingPage.validateTittleProCart();

});