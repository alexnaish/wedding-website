const app = require('../../util/server');
const database = require('../../util/database');
const RsvpSchema = require('../../model/Rsvp');

app.get('*', async (req, res) => {

  try {
    const client = await database.connect();
    const Rsvp = await database.loadModel(client, 'Rsvp', RsvpSchema);
    const codeValue = req.query.code ? req.query.code.toLowerCase() : 'MISSING!';
    const { _id, code, attendance, diet } = await Rsvp.findOne({ code: codeValue });

    res.status(_id ? 200 : 404).json({
      data: { _id, code, attendance, diet }
    });
  } catch (error) {
    console.error('access-details', error);
    res.status(500).json({
      error: 'Unable to connect to database.'
    });
  }

});

module.exports = app;
