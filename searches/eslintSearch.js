module.exports = {
  'eslintSearch': function (browser) {
    browser
      .url('https://www.npmjs.com/')
      .waitForElementVisible('body',1000)
      .setValue('input[type=search]',['eslint',browser.Keys.ENTER])
      .waitForElementVisible('[data-reactid="94"]',1000)
      .assert.containsText('[data-reactid="94"]','eslint')
      .end()
  }
}
