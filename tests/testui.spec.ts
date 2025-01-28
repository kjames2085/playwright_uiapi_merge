import { expect } from "@playwright/test";
import { test } from "../src/ui/fixture/fixture";
import Launch from "../src/ui/pages/launch";
import Login from "../src/ui/pages/login";
import Homepage from "../src/ui/pages/homepage";
import Logout from "../src/ui/pages/logout";
import jsondata from "../src/ui/testdata/testdata.json";
import { testdata } from "../src/ui/testdata/testdata";
import ENV from "../src/ui/testdata/environments/env";

test('Homepage 1',{tag: '@ui'}, async ({ page, launch, homepage }) => {
    await homepage.homepage1();
})

test('Homepage 2',{tag: '@ui'}, async ({ page, launch, homepage }) => {
    await homepage.homepage2();
})



