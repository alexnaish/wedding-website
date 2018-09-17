const Guest = require('./model');

module.exports = {
  find: (id) => {
    return Guest.get(id);
  },
  update: (id, payload) => {
    return Guest.update(id, payload);
  }
};
