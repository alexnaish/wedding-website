const { Guest, Token } = require('./services/');

const CORS_LOCATION = '*' || process.env.APP_URL;

module.exports.handler = async (event) => {

  try {
    let payload = JSON.parse(event.body);
    const guest = await Guest.find(payload.access_password);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': CORS_LOCATION
      },
      body: JSON.stringify({ data: guest && Token.generate({ code: guest.code, name: guest.name }) })
    };

  } catch (error) {
    console.error('error', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': CORS_LOCATION
      },
      body: 'Internal Server Error'
    };
  }

};
