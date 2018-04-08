const Page = require('./helpers/page');

let page;

beforeEach(async () => {
  page = await Page.build();
  await page.getContentOf('localhost:3000');
});

afterEach(async () => {
  await page.close();
});
