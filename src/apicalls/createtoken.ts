import { APIRequestContext, expect } from "@playwright/test";
import { baseurl,defaultheaders } from "../apitestdata/default";
import { auth } from "../apitestdata/body";

export default async function createtoken(request: APIRequestContext, resources: string) {
    const response = await request.post(baseurl.url + resources, {
        headers: defaultheaders,
        data: auth
    });
    const token = (await response.json()).token
    expect(token).toMatch(/[0-9a-z]{15}/);
    console.log(token)
    return token;

}