const mailgun = require("mailgun-js");
const app = require('../../util/server');

app.post('*', async (req, res) => {
  try {
		const { name, attendance, diet } = req.body;
		const mg = mailgun({apiKey: process.env.EMAIL_API_KEY, domain: process.env.EMAIL_DOMAIN });
		const data = {
			from: 'Wedding Website <changes@alexandsarawedding.co.uk>',
			to: process.env.EMAIL_RECIPIENTS,
			subject: 'RSVP Change Notification',
			html: `An RSVP record has changed:
			<p>Name: ${name}</p>
			<p>Attending: ${attendance ? 'Yes' : 'No'}</p>
			<p>Dietary notes: ${diet}</p>
			`
		};
		await mg.messages().send(data);
		res.status(200).json({});

  } catch (error) {
    console.error('callback', error);
    res.status(500).json({
      error: 'Unable to send notification.'
    });
  }

});

module.exports = app;
