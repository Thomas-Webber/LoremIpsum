import { LoremIpsumPage } from './app.po';

describe('lorem-ipsum App', () => {
  let page: LoremIpsumPage;

  beforeEach(() => {
    page = new LoremIpsumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
