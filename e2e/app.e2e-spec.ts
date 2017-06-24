import { ListSitePage } from './app.po';

describe('list-site App', () => {
  let page: ListSitePage;

  beforeEach(() => {
    page = new ListSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
