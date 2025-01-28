import { test } from "../src/ui/fixture/fixture";
import Launch from "../src/ui/pages/launch";
import Logout from "../src/ui/pages/logout";
import jsondata from "../src/ui/testdata/testdata.json";

test('Logout',{tag: '@ui'}, async ({ page, launch, logout }) => {

    await logout.logout();
})