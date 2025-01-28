import { Page } from "@playwright/test";

export default class Launch {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async launch(url: string) {
        await this.page.goto(url);
    }



}