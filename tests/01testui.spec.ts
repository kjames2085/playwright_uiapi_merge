import { expect } from "@playwright/test";
import {test} from "../src/ui/fixture/myfixture";
import Launch from "../src/ui/pages/Launch";
import Login from "../src/ui/pages/Login";
import Homepage from "../src/ui/pages/Homepage";
import Logout from "../src/ui/pages/Logout";
import jsontestdata from "../src/ui/testdata/jsontestdata.json";
import { testdata } from "../src/ui/testdata/testdata";
import ENV from "../src/ui/testdata/env";


let launch, homepage, logout;

test('Homepage 1', async ({launch,homepage}) => {
  await homepage.Homepage1();
})

test('homepage 2', async ({launch,homepage}) => {
  await homepage.Homepage2();
})







