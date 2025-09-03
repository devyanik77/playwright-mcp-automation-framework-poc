import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    async verifyHomePage() {
        // await this.page.waitForURL(/Banking-Project-Demo$/, { timeout: 10000 });
        await this.page.waitForURL('**/Banking-Project-Demo*', { timeout: 20000 }); 
        // await expect(this.page.getByRole('heading', { name: '🏦 Sample Banking Application' })).toBeVisible();
        // await expect(this.page.getByText('Welcome to the Testers Talk Banking Application')).toBeVisible();
           await expect(this.page.getByRole('heading', { name: '🏦 Sample Banking Application' })).toBeVisible();
            await expect(this.page.getByText('Welcome to the Testers Talk Banking Application')).toBeVisible();
            // Or, use relaxed waitForURL (if needed)
            await this.page.waitForURL(/Banking-Project-Demo/, { timeout: 20000, waitUntil: 'domcontentloaded' });

    }
 
    async clickQuickTransactions() {
        await this.page.getByRole('link', { name: '💳 Quick Transactions' }).click();
    }
}