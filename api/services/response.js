module.exports = {
  success: payload => {
    return generateResponse({ status: 200, payload });
  },
  bad: (payload) => {
    return generateResponse({ status: 400, payload });
  },
  error: (payload) => {
    return generateResponse({ status: 500, payload });
  }
};

function generateResponse ({ status, payload }) {
  return {
    statusCode: status,
    headers: {
      'Access-Control-Allow-Origin': '*'  || process.env.APP_URL
    },
    body: JSON.stringify({ data: payload })
  };
}
