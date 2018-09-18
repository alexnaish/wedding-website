const { Guest, Token } = require('./services/');

module.exports.handler = async (event) => {

  if (!event.queryStringParameters) {
    throw new Error('No token parameter supplied!');
  }

  const tokenDetails = Token.verify(event.queryStringParameters.token);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*' || 'https://alexandsarawedding.co.uk'
    },
    body: JSON.stringify({
      data: {
        valid: !!tokenDetails,
        content: tokenDetails
      }
    })
  };
};
