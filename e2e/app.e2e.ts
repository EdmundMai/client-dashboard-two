import { ClientDashboardTwoPage } from './app.po';

describe('client-dashboard-two App', function() {
  let page: ClientDashboardTwoPage;

  beforeEach(() => {
    page = new ClientDashboardTwoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('client-dashboard-two works!');
  });
});
