import { expect } from "@playwright/test";
import {test} from "../src/fixture/myfixture";
import Launch from "../src/pages/Launch";
import Login from "../src/pages/Login";
import Homepage from "../src/pages/Homepage";
import Logout from "../src/pages/Logout";
import jsontestdata from "../src/testdata/jsontestdata.json";
import { testdata } from "../src/testdata/testdata";
import ENV from "../src/testdata/env";


let launch, homepage, logout;

test('Homepage 1', async ({launch,homepage}) => {
  await homepage.Homepage1();
})

test('homepage 2', async ({launch,homepage}) => {
  await homepage.Homepage2();
})







