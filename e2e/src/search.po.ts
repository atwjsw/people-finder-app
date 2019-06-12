import { browser, by, element } from 'protractor';

export class SearchPage {
  navigateTo() {
    return browser.get('/search');
  }

  getFirstNameInputFieldPlaceHolder() {
    return element(by.id('firstName')).getAttribute('placeholder');
  }

  getLastNameInputFieldPlaceHolder() {
    return element(by.id('lastName')).getAttribute('placeholder');
  }
}
