import { Locator, Page } from "@playwright/test";

export default class Homepage {

    readonly page: Page;
    readonly admin_lnk: Locator;
    readonly pim_lnk: Locator;
    readonly leave_lnk: Locator;
    readonly time_lnk: Locator;


    constructor(page: Page) {
        this.page = page;
        this.admin_lnk = page.getByRole('link', { name: 'Admin' });
        this.pim_lnk = page.getByRole('link', { name: 'PIM' });
        this.leave_lnk = page.getByRole('link', { name: 'Leave' });
        this.time_lnk = page.getByRole('link', { name: 'Time' });

    }

    async Homepage1() {
        await this.admin_lnk.click();
        await this.pim_lnk.click();
    }

    async Homepage2() {
        await this.leave_lnk.click();
        await this.time_lnk.click();
    }

}