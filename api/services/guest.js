let Dynamo = require('dynasty')({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'eu-west-2'
});

const Guest = Dynamo.table(process.env.GUESTS_TABLE);

module.exports = {
  find: (id) => {
    return Guest.find(id);
  },
  update: (id, payload) => {
    return Guest.update(id, payload);
  }
};
