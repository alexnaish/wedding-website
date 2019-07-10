const nodemailer = require('nodemailer');
const app = require('../../util/server');

app.post('*', async (req, res) => {

  try {

		let transporter = nodemailer.createTransport({
			host: 'smtp.googlemail.com',
			port: 465,
			secure: true,
			auth: {
					user: process.env.EMAIL_ACCOUNT,
					pass: process.env.EMAIL_PASSWORD
			}
		});

		let mailOptions = {
				from: `"Wedding Website" <${process.env.EMAIL_ACCOUNT}>`,
				to: process.env.EMAIL_ACCOUNT,
				subject: 'Change Notification',
				html: `An RSVP record has changed. <p>${JSON.stringify(req.body)}</p>`
		};

		await transporter.sendMail(mailOptions);
    res.status(200).json({});
  } catch (error) {
    console.error('callback', error);
    res.status(500).json({
      error: 'Unable to send notification.'
    });
  }

});

module.exports = app;
