const app = require('../../util/server');
const database = require('../../util/database');
const RsvpSchema = require('../../model/Rsvp');

app.put('*', async (req, res) => {

  try {

		const { _id, attendance, diet } = req.body;

    const client = await database.connect();
    const Rsvp = await database.loadModel(client, 'Rsvp', RsvpSchema);
    const result = await Rsvp.updateOne({ _id }, { $set: { attendance, diet } });
    const success = result.n === 1;
    res.status(success ? 200 : 404).json({
      data: success ? 'success!' : 'missing'
    });
  } catch (error) {
    console.error('update-details', error);
    res.status(500).json({
      error: 'An error occurred saving your details. Please contact us if it happens again!'
    });
  }

});

module.exports = app;
