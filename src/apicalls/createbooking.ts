import { APIRequestContext, expect } from "@playwright/test";
import { baseurl, defaultheaders } from "../apitestdata/default";
import { createbookingdata } from "../apitestdata/body";

export default async function createbooking (request: APIRequestContext, resources: string) {

    const response = await request.post(baseurl.url + resources, {
        headers: defaultheaders,
        data: createbookingdata
      });
    
      const bookingid = (await response.json()).bookingid
      expect(bookingid.toString()).toMatch(/[0-9]/);
      console.log(bookingid)
      return bookingid;
    

}