import { expect, Locator, Page } from "@playwright/test";

export default class Login {

    readonly page: Page;
    readonly username_txtbox: Locator;
    readonly password_txtbox: Locator;
    readonly login_btn: Locator;
    readonly timeatworktext: Locator;


    constructor(page: Page) {
        this. page = page;
        this.username_txtbox = page.getByPlaceholder('Username');
        this.password_txtbox = page.getByPlaceholder('Password');
        this.login_btn = page.getByRole('button', { name: 'Login' });
        this.timeatworktext = page.getByText('Time at Work');

    }

    async login(username,password) {
        await this.username_txtbox.click();
        await this.username_txtbox.fill(username);
        await this.password_txtbox.click();
        await this.password_txtbox.fill(password);
        await this.login_btn.click();
        await expect(this.timeatworktext).toBeVisible();
        await this.page.context().storageState({ path: 'playwright/.auth/auth.json'})

    }
}