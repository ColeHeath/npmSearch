module.exports = {
  'npmSearch': function (browser) {
    browser
      .url('https://www.npmjs.com/')
      .pause(1000)
      .setValue('input[type=search]',['eslint',browser.Keys.ENTER])
      .pause(1000)
      .assert.containsText('[data-reactid="94"]','eslint')
      .click('[data-reactid="9"]')
      .pause(1000)
      .setValue('input[type=search]',['node',browser.Keys.ENTER])
      .pause(1000)
      .assert.containsText('[data-reactid="94"]','NODE')
      .click('[data-reactid="9"]')
      .pause(1000)
      .setValue('input[type=search]',['not here',browser.Keys.ENTER])
      .pause(1000)
      .assert.containsText('[data-reactid="94"]','not here')
      .end()
  }
}
