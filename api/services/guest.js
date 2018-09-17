const dynamoose = require('dynamoose');
dynamoose.AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: 'eu-west-2'
});

dynamoose.setDefaults({
  create: true,
  update: false,
  waitForActive: false,
  prefix: 'wedding-'
});

let Guest = dynamoose.model('guests', {
  code: {
    type: String,
    hashKey: true
  },
  name: String
}, { timestamps: true });

module.exports = {
  find: (id) => {
    return Guest.get(id);
  },
  update: (id, payload) => {
    return Guest.update(id, payload);
  }
};
