import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-home h2')).getText();
  }

  getNavBarPeopleFinder() {
    return element(by.css('navbar-brand'));
  }

  getNavBarListItem() {
    return element(by.id('list'));
  }

  getNavBarSearchItem() {
    return element(by.id('search'));
  }
}
