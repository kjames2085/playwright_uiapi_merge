import { expect, test } from "@playwright/test";
import createbooking from "../src/apicalls/createbooking";
import createtoken, { Token } from "../src/apicalls/createtoken";
import updatebooking from "../src/apicalls/updatebooking";
import { updatebookingheaders } from "../src/apitestdata/headers";
import Createtoken from "../src/apicalls/createtoken";
import data from "../src/apitestdata/token.json";


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

