**Playwright Automation Project**

This repository contains an end-to-end test automation framework built using Playwright.
It is designed to run reliable, fast, and cross-browser tests for web applications.

**Tech Stack**

- Playwright
- JavaScript / TypeScript
- Node.js
- npm

**Project Structure**

```text
├── tests/
│   ├── api_test/
│   ├── ui_test/
│   │   ├── page_objects/
│   │   ├── specs/
│   │   └── utils/
├── playwright.config.js
├── package.json
└── README.md


**Prerequisites**

- Make sure you have the following installed:
- Node.js (v16 or later)
- npm or yarn
- A modern browser:
Chromium
Firefox
WebKit

**Installation**
1. Clone the repository
git clone <repository-url>
cd <project-folder>

2. Install dependencies
npm install

3. Install Playwright browsers
npx playwright install

Running Tests
Run all tests
npx playwright test

Run tests in headed mode
npx playwright test --headed

Run tests for a specific browser
npx playwright test --project=chromium

Run a specific test file
npx playwright test tests/ui_test/specs/login.spec.js

Test Reports

After execution, view the HTML report:

npx playwright show-report
