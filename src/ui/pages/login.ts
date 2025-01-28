import { expect, Locator, Page } from "@playwright/test";

export default class Login {
    page: Page;
    usernametxtbox: Locator;
    passwordtxtbox: Locator;
    loginbtn: Locator;
    timeatworktxt: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernametxtbox = page.getByRole('textbox', { name: 'Username' });
        this.passwordtxtbox = page.getByRole('textbox', { name: 'Password' });
        this.loginbtn = page.getByRole('button', { name: 'Login' });
        this.timeatworktxt = page.getByText('Time at Work');
    }

    async login(username: string, password: string) {
        await this.usernametxtbox.click();
        await this.usernametxtbox.fill(username);
        await this.passwordtxtbox.click();
        await this.passwordtxtbox.fill(password);
        await this.loginbtn.click();
        await expect(this.timeatworktxt).toBeVisible();
        await this.page.context().storageState({ path: 'playwright/.auth/auth.json' })
    }
}