import { browser, by, element } from 'protractor';

/* tslint:disable:promise-function-async */
export class AppPage {
  public getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  public navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }
}
