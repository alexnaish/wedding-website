const { Guest, Token, Response } = require('./services/');

module.exports.handler = async (event) => {

  if (!event.queryStringParameters) {
    return Response.bad({ message: 'No token supplied!', error: 'no-token-supplied' });
  }

  const tokenDetails = Token.verify(event.queryStringParameters.token);
  if (!tokenDetails) {
    return Response.bad({ message: 'Invalid token supplied.', error: 'invalid-token' });
  }

  const guestData = tokenDetails && await Guest.find(tokenDetails.code);
  if (!guestData) {
    return Response.bad({ message: 'No record found!', error: 'no-guest-record' });
  }

  return Response.success({
    guest: guestData,
    issued: tokenDetails.iat * 1000 // * 1000 to put into ms
  });
};

