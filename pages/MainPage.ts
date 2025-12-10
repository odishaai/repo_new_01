import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigate(url: string) {
    await this.page.goto(url);
    await this.waitForLoad();
  }

  // Add page-specific methods here based on execution steps
}