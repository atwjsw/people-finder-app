import { ListPage } from './list.po';
import { HomePage } from './home.po';

describe('People Finder List Page', () => {
  let page: ListPage;
  let appPage: HomePage;

  beforeEach(() => {
    page = new ListPage();
    appPage = new HomePage();
  });

  it('should display table header firstName', () => {
    page.navigateTo();
    expect(page.getTableHeaderFirstName()).toEqual('First Name');
  });

  it('should display table header lastName', () => {
    page.navigateTo();
    expect(page.getTableHeaderLastName()).toEqual('Last Name');
  });

  it('should return to home page if nav-bar logo is clicked', () => {
    page.navigateTo();
    page.getNavBarPeopleFinder().click();
    expect(appPage.getTitleText()).toEqual('Welcome to the People Finder!');
  });


});
