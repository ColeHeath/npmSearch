module.exports = {
  'searchFail': function (browser) {
    browser
      .url('https://www.npmjs.com/')
      .waitForElementVisible('body',1000)
      .setValue('input[type=search]',['a;sbndklghja;sdv',browser.Keys.ENTER])
      .waitForElementVisible('[data-reactid="83"]',1000)
      .assert.containsText('[data-reactid="83"]','0')
      .end()
  }
}
