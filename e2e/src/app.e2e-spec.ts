import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', (): void => {
  let page: AppPage;

  beforeEach((): void => {
    page = new AppPage();
  });

  it('should display welcome message', async (): Promise<void> => {
    await page.navigateTo();
    await expect(page.getTitleText()).toEqual('cali-zoo app is running!');
  });

  afterEach(async (): Promise<void> => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    const expected: Partial<logging.Entry> = {
      level: logging.Level.SEVERE,
    };
    expect(logs).not.toContain(jasmine.objectContaining(expected));
  });
});
