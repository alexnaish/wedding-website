const { Guest, Token, Response } = require('./services/');

module.exports.handler = async () => {
  return Response.success('Success!');
};

