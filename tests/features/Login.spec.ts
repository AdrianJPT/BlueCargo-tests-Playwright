import { test, expect } from '../util/base';

// Test data
import { email, password, name } from '../data-test/data-input';

test('Validate the structure of the login form', async ({ page, portalPage,loginPage }) => {
  await page.goto('https://www.bluecargo.io/');
  await portalPage.clickBtnLogin();

  // Validation for the form fields
  await loginPage.existTitleForm();
  await loginPage.existTitleEmail();
  await loginPage.validateEmptyEmail();
  await loginPage.existTitlePassword();
  await loginPage.validateEmptyPassword();
  await loginPage.existTitleResetPassword();
  await loginPage.existTitleCreateAccount();
  await loginPage.existBtnContinue();
});

test('Validate Log in sucessfully', async ({ page, portalPage,loginPage,landingPage  }) => {
  await page.goto('https://www.bluecargo.io/');
  await portalPage.clickBtnLogin();

  // input email
  await loginPage.clickFieldEmail();
  await loginPage.fillFieldEmail(email);
  
  // input password
  await loginPage.clickFieldPassword();
  await loginPage.fillFieldPassword(password);

  await loginPage.clickBtnContinue();

  // validate that we are in the Landing page succesfully
  await landingPage.validateProfileEmailInfo(email);
  await landingPage.validateWelcomeMessage(name);
});

test('Validate Log out sucessfully', async ({ page, portalPage, landingPage, loginPage}) => {
  await page.goto('https://www.bluecargo.io/');
  await portalPage.clickBtnLogin();

  await loginPage.clickFieldEmail();
  await loginPage.fillFieldEmail(email);
  
  // input email
  await loginPage.clickFieldEmail();
  await loginPage.fillFieldEmail(email);
  
  // input password
  await loginPage.clickFieldPassword();
  await loginPage.fillFieldPassword(password);

  await loginPage.clickBtnContinue();

  // Log Out 
  await landingPage.clickProfileCart();
  await landingPage.clickOptionLogout();

  // Validate that we are in the login page
  await page.waitForURL('https://erl.bluecargo.io/signin');
});
