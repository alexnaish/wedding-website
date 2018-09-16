const dynamoose = require('dynamoose');
dynamoose.AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: 'eu-west-2'
});

dynamoose.setDefaults({
  create: false,
  update: false,
  prefix: 'wedding-'
});

let Guest = dynamoose.model('Guest', {
  code: {
    type: String,
    hashKey: true
  },
  name: String
});

module.exports = {
  find: (id) => {
    return Guest.find(id);
  },
  update: (id, payload) => {
    return Guest.update(id, payload);
  }
};
