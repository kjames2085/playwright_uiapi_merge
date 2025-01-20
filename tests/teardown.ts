import {test} from "../src/fixture/myfixture";

test('Logout', async ({launch,logout}) => {
    await logout.logout();
  })
  
