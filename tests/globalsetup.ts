import { test } from "../src/fixture/myfixture";
import Launch from "../src/pages/Launch";
import ENV from "../src/testdata/env";
import Login from "../src/pages/Login";
import createtoken from "../src/apicalls/createtoken";
import { updatebookingdata } from "../src/apitestdata/body";
import { updatebookingheaders } from "../src/apitestdata/headers";
import Createtoken from "../src/apicalls/createtoken";

let launch, login, token;


test('Login', async ({ launch, login }) => {
    console.log(ENV.FLAG);
    await login.login(ENV.USERNAME, ENV.PASSWORD)
})

test('Create Token', async ({ request }) => {
  await Createtoken.createtoken(request, '/auth');
})