import {test} from "../src/ui/fixture/myfixture";

test('Logout', async ({launch,logout}) => {
    await logout.logout();
  })
  
