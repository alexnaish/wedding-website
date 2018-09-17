const { Guest, Token } = require('./services/');

module.exports.handler = async (event) => {

  if (!event.queryStringParameters) {
    throw new Error('No token parameter supplied!');
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*' || 'https://alexandsarawedding.co.uk'
    },
    body: JSON.stringify({ data: { valid: Token.verify(event.queryStringParameters.token) } })
  };
};
