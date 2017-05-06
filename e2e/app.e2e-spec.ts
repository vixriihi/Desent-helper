import { DescentPage } from './app.po';

describe('descent App', () => {
  let page: DescentPage;

  beforeEach(() => {
    page = new DescentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
