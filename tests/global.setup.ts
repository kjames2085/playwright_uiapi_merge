import { test } from "../src/ui/fixture/fixture";
import Launch from "../src/ui/pages/launch";
import jsondata from "../src/ui/testdata/testdata.json";
import Login from "../src/ui/pages/login";
import { APIRequestContext } from "@playwright/test";
import Createtoken from "../src/api/apicalls/apicalls";

test('Login',{tag: '@ui'}, async ({ page, launch, login }) => {

    await login.login(jsondata.username, jsondata.password);
})

test('Create Token', { tag: '@api' }, async ({ request }) => {
    const createtoken = new Createtoken();
    await createtoken.createtoken(request, '/auth');

})
