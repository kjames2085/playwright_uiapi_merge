import { Locator, Page } from "@playwright/test";

export default class Logout {
    page: Page;
    profpicimg: Locator;
    logoutlnk: Locator;

    constructor(page: Page) {
        this.page = page;
        this.profpicimg = page.getByRole('img', { name: 'profile picture' });
        this.logoutlnk = page.getByRole('menuitem', { name: 'Logout' });

    }

    async logout() {
        await this.profpicimg.click();
        await this.logoutlnk.click();
    }
}