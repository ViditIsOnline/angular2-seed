import { Angular2SeedPage } from './app.po';

describe('angular2-seed App', () => {
  let page: Angular2SeedPage;

  beforeEach(() => {
    page = new Angular2SeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
