import { RealtyConnectionsPage } from './app.po';

describe('realty-connections App', function() {
  let page: RealtyConnectionsPage;

  beforeEach(() => {
    page = new RealtyConnectionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
