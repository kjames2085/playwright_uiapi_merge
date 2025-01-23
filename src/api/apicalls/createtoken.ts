import { APIRequestContext, expect } from "@playwright/test";
import { baseurl, defaultheaders } from "../apitestdata/default";
import { auth } from "../apitestdata/body";
import fs from 'fs';

export default class Createtoken {

    public static token;
    public static name = 'vasu';

   private constructor (){

   }

static async createtoken(request: APIRequestContext, resources: string) {
    const response = await request.post(baseurl.url + resources, {
        headers: defaultheaders,
        data: auth
    });
    // await request.storageState({path:'playwright/.auth/auth.json'})
     this.token = (await response.json()).token
     const data = {
        "token": this.token
     }
    fs.writeFile('./src/api/apitestdata/token.json', JSON.stringify(data),()=>{})

}
}



