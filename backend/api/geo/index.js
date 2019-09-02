const app = require('../../util/server');
const { fetchCountry } = require('../../util/country');

app.get('*', async (req, res) => {
  try {
		const userIp = req.get('x-forwarded-for');
		const geo = await fetchCountry(userIp);
		res.status(200).json(geo);
  } catch (error) {
    console.error('geo-location', error);
    res.status(500).json({
      error: 'An error occurred fetching geo location.'
    });
  }

});

module.exports = app;
