import { test as mytest } from "@playwright/test";
import Launch from "../pages/Launch";
import ENV from "../testdata/env";
import Login from "../pages/Login";
import Homepage from "../pages/Homepage";
import Logout from "../pages/Logout";

export const test = mytest.extend<{launch: Launch, login: Login, homepage: Homepage, logout: Logout}>({
    launch: async ({page},use) => {
        const launch = new Launch(page);
        await launch.launch(ENV.URL);
        await use(launch);
    },
    login: async ({page},use) => {
        const login = new Login(page);
        await use(login);

    },
    homepage: async ({page},use) => {
        const homepage = new Homepage (page);
        await use(homepage)
    },
    logout: async ({page},use) => {
        const logout = new Logout(page);
        await use(logout);
    }
})