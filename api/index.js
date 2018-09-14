module.exports.access = async () => {
  return {
    statusCode: 200,
    body: 'Access!'
  };
};

module.exports.submission = async () => {
  return {
    statusCode: 200,
    body: 'Submission!'
  };
};

