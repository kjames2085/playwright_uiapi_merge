import { test } from "../src/ui/fixture/myfixture";
import Launch from "../src/ui/pages/Launch";
import ENV from "../src/ui/testdata/env";
import Login from "../src/ui/pages/Login";
import createtoken from "../src/api/apicalls/createtoken";
import { updatebookingdata } from "../src/api/apitestdata/body";
import { updatebookingheaders } from "../src/api/apitestdata/headers";
import Createtoken from "../src/api/apicalls/createtoken";

let launch, login, token;


test('Login', async ({ launch, login }) => {
    console.log(ENV.FLAG);
    await login.login(ENV.USERNAME, ENV.PASSWORD)
})

test('Create Token', async ({ request }) => {
  await Createtoken.createtoken(request, '/auth');
})