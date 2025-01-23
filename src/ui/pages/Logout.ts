import { Locator, Page } from "@playwright/test";

export default class Logout {
    readonly page: Page;
    readonly profpic_img: Locator;
    readonly logout_lnk: Locator;

    constructor(page: Page) {
        this.page = page;
        this.profpic_img = page.getByRole('banner').getByRole('img', { name: 'profile picture' });
        this.logout_lnk = page.getByRole('menuitem', { name: 'Logout' });

    }

    async logout() {
        await this.profpic_img.click();
        await this.logout_lnk.click();
    }
}