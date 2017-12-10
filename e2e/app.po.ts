import { browser, element, by } from 'protractor';

export class Angular2WeatherAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('#brand')).getText();
  }
}
