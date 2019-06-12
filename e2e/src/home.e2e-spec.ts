import { HomePage } from './home.po';
import {SearchPage} from './search.po';
import {ListPage} from './list.po';

describe('People Finder Home Page', () => {
  let homePage: HomePage;
  let searchPage: SearchPage;
  let listPage: ListPage;

  beforeEach(() => {
    homePage = new HomePage();
    searchPage = new SearchPage();
    listPage = new ListPage();
  });

  it('should display home page', () => {
    homePage.navigateTo();
    expect(homePage.getTitleText()).toEqual('Welcome to the People Finder!');
  });

  it('should go to list page if navbar "list all" is clicked', () => {
    homePage.navigateTo();
    homePage.getNavBarListItem().click();
    expect(listPage.getTableHeaderLastName()).toEqual('Last Name');
  });

  it('should go to search page if navbar "search" is clicked', () => {
    homePage.navigateTo();
    homePage.getNavBarSearchItem().click();
    expect(searchPage.getLastNameInputFieldPlaceHolder()).toEqual('Enter last name');
  });
});
