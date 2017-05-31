module.exports = {
  'nodeSearch': function (browser) {
    browser
      .url('https://www.npmjs.com/')
      .waitForElementVisible('body',1000)
      .setValue('input[type=search]',['node',browser.Keys.ENTER])
      .waitForElementVisible('[data-reactid="94"]',1000)
      .assert.containsText('[data-reactid="94"]','NODE')
      .end()
  }
}
