const app = require('../../util/server');
const database = require('../../util/database');
const RsvpSchema = require('../../model/Rsvp');

app.put('*', async (req, res) => {

  try {
    const client = await database.connect();
    const Rsvp = await database.loadModel(client, 'Rsvp', RsvpSchema);

    const res = await Rsvp.updateOne({ code: req.body.code }, { $set: req.body });
    console.log('==================');
    console.log('res', res);
    console.log('==================');
    const success = res.n === 1;
    res.status(success ? 200 : 404).json({
      data: success ? 'success!' : 'missing'
    });
  } catch (error) {
    console.error('update-details', error);
    res.status(500).json({
      error: 'An error occurred saving your details.'
    });
  }

});

module.exports = app;
