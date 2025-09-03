import { Page, Locator } from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto(url: string) {
        try {
            await this.page.goto(url, { timeout: 30000 });
        } catch (error) {
            console.error('Navigation failed:', error);
            await this.page.screenshot({ path: 'nav-error.png' });

        }
    }

    async getTitle(): Promise < string > {
            return this.page.title();
        }

    async waitForNavigation(timeout: number = 10000) {
            await this.page.waitForNavigation({ timeout });
        }

    async getByRole(role: string, options ?: any): Promise < Locator > {
            return this.page.getByRole(role as any, options);
        }

    async getByLabel(label: string): Promise < Locator > {
            return this.page.getByLabel(label);
        }

    async getByText(text: string | RegExp): Promise < Locator > {
            return this.page.getByText(text);
        }
    }