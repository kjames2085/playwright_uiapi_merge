import { Page } from "@playwright/test";

export default class Launch {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;

    }

    async launch(url) {
        await this.page.goto(url);
    }

}