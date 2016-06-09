export class ClientDashboardTwoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('client-dashboard-two-app h1')).getText();
  }
}
