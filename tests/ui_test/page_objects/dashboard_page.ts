import { Page, Locator } from '@playwright/test';

export class DashboardPage {
    private page: Page;
    private welcomeMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.welcomeMessage = page.getByRole('heading', { name: 'Dashboard' });
    }

    async getWelcomeMessage() {
        return this.welcomeMessage.textContent();
    }
}