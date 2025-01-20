import { expect, test } from "@playwright/test";
import createbooking from "../src/apicalls/createbooking";
import createtoken from "../src/apicalls/createtoken";
import updatebooking from "../src/apicalls/updatebooking";

test.describe.configure({ mode: 'serial' });

let token, bookingid;
test('Create Token', async ({ request }) => {
  token = await createtoken(request,'/auth');
})

test('Create Booking', async ({ request }) => {
  bookingid = await createbooking(request,'/booking')
})

test('Update Booking', async ({ request }) => {
  await updatebooking (request,'/booking/',bookingid,token)
 });
