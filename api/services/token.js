const jwt = require('jsonwebtoken');

module.exports = {
  generate: (payload) => {
    return jwt.sign(payload, process.env.SECRET_TOKEN_KEY);
  },
  verify: (token) => {
    return jwt.verify(token, process.env.SECRET_TOKEN_KEY);
  }
};
