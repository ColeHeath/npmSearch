'use strict';

const commands = {
  isLoaded (browser) {
    return this
      .waitForElementVisible('@loadElement', 10000);
  },
  search (text) {
    return this
      .setValue('input[type=search]',[text])
      .click('[tabindex="2"]')
  }
};

module.exports = {
  url () {
    return 'https://npmjs.org';
  },
  commands: [commands],
  elements: {
    equipmentTable: '.equipments_table div:nth-child(2) table:nth-child(1)',
    data_id: '[data-reactid="94"]',
    search_id: 'input[type=search]',
    fail_id: '[data-reactid="83"]',
    loadElement: '.npm-loves-you'
  }
};
