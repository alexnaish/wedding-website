const dynamoose = require('dynamoose');

module.exports = dynamoose.model('guests', {
  code: {
    type: String,
    hashKey: true
  },
  name: String
}, { timestamps: true });
