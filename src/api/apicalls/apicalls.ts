import { APIRequestContext, expect } from "@playwright/test";
import { baseurl, defaultheaders } from "../testdata/default";
import { bodyforcreatebooking, bodyforcreatetoken, bodyforupdatebooking } from "../testdata/data";
import { headersforupdatebooking } from "../testdata/headers";
import fs from 'fs';

export default class Createtoken {

    static token;
    async createtoken(request: APIRequestContext, resources: string) {
        const response = await request.post(baseurl.url + resources, {
            headers: defaultheaders,
            data: bodyforcreatetoken
        })
        Createtoken.token = ((await response.json()).token);
        const data = {
            "token": Createtoken.token
         }
        fs.writeFile('./src/api/testdata/token.json', JSON.stringify(data),()=>{})
    
    }
}

export async function createbooking(request: APIRequestContext, resources: string) {
    const response = await request.post(baseurl.url + resources, {
        headers: defaultheaders,
        data: bodyforcreatebooking
    })

    return ((await response.json()).bookingid)
}

export async function updatebooking(request: APIRequestContext, resources: string, bookingid: string) {
    const response = await request.put(baseurl.url + resources + bookingid, {
        headers: headersforupdatebooking,
        data: bodyforupdatebooking
    })

    expect((await response.json()).firstname).toBe("James")
}