import {SearchPage} from './search.po';

describe('People Finder List Page', () => {
  let page: SearchPage;

  beforeEach(() => {
    page = new SearchPage();
  });

  it('should display in firstName', () => {
    page.navigateTo();
    expect(page.getFirstNameInputFieldPlaceHolder()).toEqual('Enter first name');
  });

  it('should display table header lastName', () => {
    page.navigateTo();
    expect(page.getLastNameInputFieldPlaceHolder()).toEqual('Enter last name');
  });
});
