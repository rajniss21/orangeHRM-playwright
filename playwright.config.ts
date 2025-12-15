import { defineConfig } from "@playwright/test";

export const httpCredentials = {
    username: 'Admin',
    password: 'admin123',
};



export default defineConfig({
  // globalSetup: require.resolve('./global-setup'),
  // grep: testPlanFilter(),
  // reporter: [
  //   ["line"],
  //   ["allure-playwright"],
  //   ['html', { outputFolder: 'playwright-report', open: 'never' }]
  // ],
  testDir: "./tests/ui_test/specs",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 0 : 0, // Retries added for test stability
  workers: process.env.CI ? 1 : 1, //  Allow more workers on CI

  use: {
    baseURL: "https://opensource-demo.orangehrmlive.com",
    screenshot: "on",
    video: "retain-on-failure",
    httpCredentials: {
      username: "admin",
      password: "admin123@",
    },
    trace: "on-first-retry",
    headless: false,
    viewport: { width: 1920, height: 1080 },
  },

  projects: [
    {
      name: "Playwright Tests",
    },
  ],
});
