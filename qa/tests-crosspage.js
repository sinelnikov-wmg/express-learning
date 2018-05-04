const Browser = require('zombie');
const assert = require('chai').assert;

let browser;
suite('Межстраничные тесты', () => {
  setup(() => {
    browser = new Browser();
  });
  test('запрос расценок для групп сос страницы туров по реке Худ должен заполнять поле реферера', (done) => {
    const referrer = 'http://localhost/tours/hood-river';
    browser.visit(referrer, () => {
      browser.clickLink('.requestGroupRate', () => {
        assert(browser.field('referrer').value === referrer);
        done();
      });
    });
  });
  test('запрос расценок для груп со страницы туров пансионата "Орегон Коуст" должен заполнять поле реферера', (done) => {
    const referrer = 'http://localhost:3000/tours/oregon-coast';
    browser.visit(referrer, () => {
      browser.clickLink('.requestGroupRate', () => {
        assert(browser.field('referrer').value === referrer);
        done();
      });
    });
  });
  test('посещение страницы "запрос цены для групп" напрямую должен приводить к пустому полю реферера', (done) => {
    browser.visit('http://localhost:300/tours/request-group-rate', () => {
      assert(browser.field('referrer').value === '');
      done();
    });
  });
});
