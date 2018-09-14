module.exports.access = (event, context, callback) => {
  callback(null, 'Access!');
};

module.exports.submission = (event, context, callback) => {
  callback(null, 'Submission!');
};

