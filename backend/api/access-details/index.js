const app = require('../../util/server');
const database = require('../../util/database');
const RsvpSchema = require('../../model/Rsvp');

app.get('*', async (req, res) => {

  try {
    const client = await database.connect();
    const Rsvp = await database.loadModel(client, 'Rsvp', RsvpSchema);
    const code = req.query.code ? req.query.code.toLowerCase() : 'MISSING!';
    const result = await Rsvp.findOne({ code });

    res.status(result ? 200 : 404).json({
      data: result
    });
  } catch (error) {
    console.error('access-details', error);
    res.status(500).json({
      error: 'Unable to connect to database.'
    });
  }

});

module.exports = app;
