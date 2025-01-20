import { test } from "../src/fixture/myfixture";
import Launch from "../src/pages/Launch";
import ENV from "../src/testdata/env";
import Login from "../src/pages/Login";

let launch, login;

test('Login', async ({ launch, login }) => {
    console.log(ENV.FLAG);
    await login.login(ENV.USERNAME, ENV.PASSWORD)
})