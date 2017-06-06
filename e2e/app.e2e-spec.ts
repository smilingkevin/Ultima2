import { Ultima2Page } from './app.po';

describe('ultima2 App', function() {
  let page: Ultima2Page;

  beforeEach(() => {
    page = new Ultima2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
