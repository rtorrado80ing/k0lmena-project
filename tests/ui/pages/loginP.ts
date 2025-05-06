import { expect, Page } from '@playwright/test';

export class LoginPage {
  readonly url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto(this.url);
    await this.page.waitForSelector('input[name="username"]'); // Esperar input
  }

  async login(user: string, password: string) {
    await this.page.fill('input[name="username"]', user);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
  }

  async verifyDashboardVisible() {
    await this.page.waitForSelector('h6:has-text("Dashboard")'); // Esperar texto del dashboard
    await expect(this.page.locator('h6')).toHaveText('Dashboard');
  }
}
