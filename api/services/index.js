// const dyn

// const dynamoose = require('dynamoose');

// dynamoose.AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY,
//   secretAccessKey: process.env.AWS_SECRET_KEY,
//   region: 'eu-west-2'
// });

// dynamoose.setDefaults({
//   create: false,
//   update: false,
//   waitForActive: false,
//   prefix: 'wedding-'
// });

module.exports = {
  Guest: require('./guest'),
  Token: require('./token'),
  Response: require('./response')
};
