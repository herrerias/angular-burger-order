import { AngularBurgerOrderPage } from './app.po';

describe('angular-burger-order App', function() {
  let page: AngularBurgerOrderPage;

  beforeEach(() => {
    page = new AngularBurgerOrderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
