const app = require('../../util/server');
const database = require('../../util/database');
const RsvpSchema = require('../../model/Rsvp');

app.get('*', async (req, res) => {

  try {
    const client = await database.connect();
    const Rsvp = await database.loadModel(client, 'Rsvp', RsvpSchema);

    const result = await Rsvp.findOne({ code: req.query.code });

    res.json({
      message: result ? 'found' : 'nope',
      result
    });
  } catch (error) {
    console.error('access-details', error);
    res.status(500).json({
      error: 'Unable to connect to database.'
    });
  }

});

module.exports = app;
