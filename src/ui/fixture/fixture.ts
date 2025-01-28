import { test as mytest } from "@playwright/test";
import Launch from "../pages/launch";
import jsondata from "../testdata/testdata.json";
import Login from "../pages/login";
import Homepage from "../pages/homepage";
import Logout from "../pages/logout";

export const test = mytest.extend<{ launch: Launch, login: Login, homepage: Homepage, logout: Logout }>({
    launch: async ({ page }, use) => {
        const launch = new Launch(page);
        await launch.launch(jsondata.url);
        await use(launch);
    },
    login: async ({ page }, use) => {
        const login = new Login(page);
        await use(login);
    },
    homepage: async ({ page }, use) => {
        const homepage = new Homepage(page);
        await use(homepage);
    },
    logout: async ({ page }, use) => {
        const logout = new Logout(page);
        await use(logout);
    }

})