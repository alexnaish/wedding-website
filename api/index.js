module.exports.access = async () => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://alexandsarawedding.co.uk'
    },
    body: JSON.stringify({ data: 'Access!' })
  };
};

module.exports.submission = async () => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': 'https://alexandsarawedding.co.uk'
    },
    body: JSON.stringify({ data: 'Submission!' })
  };
};

