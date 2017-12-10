import { Angular2WeatherAppPage } from './app.po';

describe('angular2-weather-app App', function() {
  let page: Angular2WeatherAppPage;

  beforeEach(() => {
    page = new Angular2WeatherAppPage();
  });

  it('should display message saying Weather app', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Weather app');
  });
});
