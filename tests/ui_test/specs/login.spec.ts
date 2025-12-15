import { test, expect } from '@playwright/test';
import { LoginPage } from '../page_objects/login_page';
import { httpCredentials } from '../../../playwright.config';


test.describe('Login Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto('web/index.php/auth/login');
    });

    test('should login successfully with valid credentials', async ({ page }) => {
        
      await loginPage.login(httpCredentials.username, httpCredentials.password);
      
        
        // Verify successful login - assuming there's a dashboard element
        //await expect(page.locator('')).toBeVisible();
    });

    // test('should show error with invalid credentials', async () => {
    //     await loginPage.login('invalid_user', 'invalid_password');
        
    //     // Verify error message
    //     await expect(loginPage.errorMessage).toBeVisible();
    //     await expect(loginPage.errorMessage).toHaveText('Invalid credentials');
    // });

    // test('should show required field validation', async () => {
    //     // Click login without entering credentials
    //     await loginPage.submitButton.click();
        
    //     // Verify validation messages
    //     await expect(loginPage.usernameValidation).toBeVisible();
    //     await expect(loginPage.passwordValidation).toBeVisible();
    // });

    // test('should clear credentials on logout', async ({ page }) => {
    //     await loginPage.login(httpCredentials.username, httpCredentials.password);
    //     await loginPage.logout();
        
    //     // Verify return to login page
    //     await expect(page).toHaveURL(/.*\/login/);
    //     await expect(loginPage.usernameInput).toBeEmpty();
    //     await expect(loginPage.passwordInput).toBeEmpty();
    // });
});