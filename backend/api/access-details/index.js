const app = require('../../util/server');
const database = require('../../util/database');
const RsvpSchema = require('../../model/Rsvp');

app.get('*', async (req, res) => {

  try {
    const client = await database.connect();
    const Rsvp = await database.loadModel(client, 'Rsvp', RsvpSchema);
    const code = req.query.code ? req.query.code.toLowerCase() : 'MISSING!';
    const { _id, attendance, diet } = await Rsvp.findOne({ code });

    res.status(_id ? 200 : 404).json({
      data: { _id, attendance, diet }
    });
  } catch (error) {
    console.error('access-details', error);
    res.status(500).json({
      error: 'Unable to connect to database.'
    });
  }

});

module.exports = app;
