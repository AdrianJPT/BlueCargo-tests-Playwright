# BlueCargo E2E Tests - Playwright & TypeScript

This repository contains automated test scripts for the **BlueCargo** platform using [Playwright](https://playwright.dev/) and [TypeScript](https://www.typescriptlang.org/), following best practices for the **Page Object Model (POM)** design pattern.

## Test Scenarios

| Feature   | Scenario                                                                  |
|-----------|---------------------------------------------------------------------------|
| **Login** | Validate the structure of the login form                                  |
| **Login** | Validate successful login                                                 |
| **Login** | Validate successful logout                                                |
| **Pro Plan** | Validate freemium users cannot access pro features - Empty Return Appointment |
| **Pro Plan** | Validate freemium users cannot access pro features - All Shipments     |
| **Pro Plan** | Validate freemium users cannot access pro features - D&D Dashboard     |
| **Pro Plan** | Validate freemium users cannot access pro features - Start your Dispute |
| **Pro Plan** | Validate freemium users cannot access pro features - Track your Dispute |


## Project Structure

The project follows the **POM** pattern to ensure maintainability and scalability of the tests. The folder structure is organized as follows:

```bash
tests/
|-- features/
|   |-- Login.spec.ts           # Login tests
|   |-- ProFeatures.spec.ts     # Pro Plan feature tests
|
|-- pom/
|   |-- anotherUpgradePlanPage.ts      # POM for the another upgrade page
|   |-- billingPage.ts                 # POM for the billing page
|   |-- landingPage.ts                 # POM for the landing page
|   |-- pro-plan.page.ts               # POM for the pro plan page
|   |-- loginPage.ts                   # POM for the login page
|   |-- portalPage.ts                  # POM for the portal page
|   |-- upgradePlanPage.ts             # POM for the upgrade page page
|
|-- util/
|   |-- base.ts           # Reusable helper functions
|
|-- data-test/
|   |-- data-test.ts         # Test data
|
|-- playwright.config.ts     # Playwright configuration

```

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AdrianJPT/BlueCargo-tests-Playwright.git
    ```

2. Navigate to the project directory:

   ```bash
    cd BlueCargo-tests-Playwright
    ```

3. Install the dependencies:

   ```bash
    npm install
    ```
# Playwright Setup
Playwright requires browser binaries to be installed. To install them, run:

   ```bash
    npx playwright install
   ```
# Running the Tests
You can run all tests with the following command:

   ```bash
    npx playwright test
   ```
# Run a Specific Test File
To run a specific set of tests, such as the Login tests, use the command:

   ```bash
npx playwright test tests/login.spec.ts
   ```
## Best Practices Implemented

### Page Object Model (POM)

The project implements the **POM** pattern to separate UI logic from test code, making the code more reusable and easier to maintain.

- **Pages:** Each application page has its own file under the `pages/` directory, where the selectors and actions specific to that page are managed.
- **Tests:** Test files under the `tests/` directory contain the actual test cases that interact with the pages using the objects defined in the `pages/` files.

### TypeScript

**TypeScript** is used to provide a type-safe environment, helping to prevent common errors and improve code quality.

### Fixtures and Helpers

The repository includes a set of **fixtures** and **helpers** for reusing data and common functions across different tests. This includes test data, common validations, and utility functions.

## Contributions

This project is open for contributions. If you have suggestions or improvements, feel free to open an issue or submit a pull request.

  
