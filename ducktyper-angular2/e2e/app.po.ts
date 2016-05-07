export class Angular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-app h1')).getText();
  }
}
