// const Guest = require('./model');

const dynasty = require('dynasty')({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'eu-west-1'
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
