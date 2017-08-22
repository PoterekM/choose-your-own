import { TheWoodPage } from './app.po';

describe('the-wood App', () => {
  let page: TheWoodPage;

  beforeEach(() => {
    page = new TheWoodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
