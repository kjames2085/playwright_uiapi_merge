import { test } from "@playwright/test";
import { createbooking, createtoken, updatebooking } from "../src/api/apicalls/apicalls";
import { baseurl, defaultheaders } from "../src/api/testdata/default";
import { bodyforcreatebooking, bodyforupdatebooking } from "../src/api/testdata/data";
import { headersforupdatebooking } from "../src/api/testdata/headers";
import data from "../src/api/testdata/token.json";


let bookingid;

test.describe.configure({mode: 'serial'})
test('Create Booking', { tag: '@api' }, async ({ request }) => {
    bookingid = await createbooking(request, '/booking');
    console.log(bookingid)

})

test('Update Booking', { tag: '@api' }, async ({ request }) => {
    headersforupdatebooking.Cookie = headersforupdatebooking.Cookie + data.token;
    console.log(headersforupdatebooking.Cookie)
    await updatebooking(request,'/booking/',bookingid)

})