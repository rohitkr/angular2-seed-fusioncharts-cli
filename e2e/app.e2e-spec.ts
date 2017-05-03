import { Angular2FusionchartsCliSeedPage } from './app.po';

describe('angular2-fusioncharts-cli-seed App', () => {
  let page: Angular2FusionchartsCliSeedPage;

  beforeEach(() => {
    page = new Angular2FusionchartsCliSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
