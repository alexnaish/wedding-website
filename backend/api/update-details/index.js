const app = require('../../util/server');

app.post('*', async (req, res) => {
  res.json({
    message: 'update'
  });
});

module.exports = app;
