import { APIRequestContext, expect } from "@playwright/test"
import { baseurl, defaultheaders } from "../apitestdata/default"
import { updatebookingdata } from "../apitestdata/body"
import { updatebookingheaders } from "../apitestdata/headers"

export default async function updatebooking(request: APIRequestContext, resources: string, bookingid: string) {
    //updatebookingheaders.Cookie = updatebookingheaders.Cookie + token;
    // console.log(updatebookingheaders.Cookie)
    const response = await request.put(baseurl.url + resources + bookingid, {
        headers: updatebookingheaders,
        data: updatebookingdata
    })
   expect((await response.json()).firstname).toBe('Vasu')
}