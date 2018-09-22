// const Guest = require('./model');

const dynasty = require('dynasty')({
  region: 'eu-west-2'
});

const Guest = dynasty.table('wedding-guests');

module.exports = {
  find: (id) => {
    return Guest.find(id);
  },
  update: (id, payload) => {
    return Guest.update(id, payload);
  }
};
