module.exports = {
  'nodeSearch': function (browser) {
    const npmSearch = browser.page.example();
    npmSearch
      .navigate()
      .isLoaded()
      .search('node')
      .waitForElementVisible('@data_id',1000)
      .assert.containsText('@data_id','NODE')
  },
  'eslintSearch': function (browser) {
    const npmSearch = browser.page.example();
    npmSearch
      .navigate()
      .isLoaded()
      .search('eslint')
      .waitForElementVisible('@data_id',1000)
      .assert.containsText('@data_id','eslint')
  },
  'searchFail': function (browser) {
    const npmSearch = browser.page.example();
    npmSearch
      .navigate()
      .isLoaded()
      .search('a;sbndklghja;sdv')
      .waitForElementVisible('@fail_id',1000)
      .assert.containsText('@fail_id','0')
    browser.end()
  }
}
