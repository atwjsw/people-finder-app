import { browser, by, element } from 'protractor';

export class ListPage {
  navigateTo() {
    return browser.get('/list');
  }

  getTableHeaderFirstName() {
    return element(by.id('firstName')).getText();
  }

  getTableHeaderLastName() {
    return element(by.id('lastName')).getText();
  }

  getNavBarPeopleFinder() {
    return element(by.css('.navbar-brand'));
  }
}
