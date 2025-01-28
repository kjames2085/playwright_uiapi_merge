import { Locator, Page } from "@playwright/test";

export default class Homepage {

    page: Page;
    adminlnk: Locator;
    pimlink: Locator;
    leavelnk: Locator;
    timelnk: Locator;

    constructor(page: Page) {
        this.page = page;
        this.adminlnk = page.getByRole('link', { name: 'Admin' });
        this.pimlink = page.getByRole('link', { name: 'PIM' });
        this.leavelnk = page.getByRole('link', { name: 'Leave' });
        this.timelnk = page.getByRole('link', { name: 'Time' });

    }

    async homepage1() {
        await this.adminlnk.click();
        await this.pimlink.click();
    }

    async homepage2() {
        await this.leavelnk.click();
        await this.timelnk.click();
    }
}