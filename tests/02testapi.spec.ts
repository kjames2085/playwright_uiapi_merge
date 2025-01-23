import { expect, test } from "@playwright/test";
import createbooking from "../src/api/apicalls/createbooking";
import createtoken, { Token } from "../src/api/apicalls/createtoken";
import updatebooking from "../src/api/apicalls/updatebooking";
import { updatebookingheaders } from "../src/api/apitestdata/headers";
import Createtoken from "../src/api/apicalls/createtoken";
import data from "../src/api/apitestdata/token.json";


let bookingid;

// updatebookingheaders.Cookie = updatebookingheaders.Cookie + data.token;
// console.log(updatebookingheaders.Cookie);
// test('Create Token', async ({ request }) => {
//   token = await createtoken(request,'/auth');
// })

test('Create Booking', async ({ request }) => {
  bookingid = await createbooking(request, '/booking')
})

test('Update Booking', async ({ request }) => {
  updatebookingheaders.Cookie = updatebookingheaders.Cookie + data.token;
  console.log(updatebookingheaders.Cookie);
  await updatebooking(request, '/booking/', bookingid)
});

