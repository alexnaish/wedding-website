const { Guest, Token, Response } = require('./services/');

module.exports.handler = async (event) => {

  let payload;
  try {
    payload = JSON.parse(event.body);
  } catch (error) {
    return Response.bad({ message: 'Invalid data!', error: 'invalid-data' });
  }

  const guest = await Guest.find(payload.access_password);
  if (!guest) {
    return Response.bad({ message: 'No record found!', error: 'no-guest-record' });
  }

  return Response.success(Token.generate({ code: guest.code, name: guest.name }));

};
