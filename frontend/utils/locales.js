import fetch from 'unfetch';

const dictionary = {
	GB: {
		home: 'Home',
		england: 'England',
		hungary: 'Hungary',
		gifts: 'Gifts',
		rsvp: 'RSVP',
		welcome: 'We\'re getting married!',
		address: 'Address',
		website: 'Website',
		hungarianVenue: 'Hungarian Venue',
		englishVenue: 'English Venue',
		poem: [
			'We know it’s not traditional',
			'And it’s not the way it’s done,',
			'But rather than a wedding list',
			'We’d love a bit of sun.',
			'',
			'So if you\'d like to give a gift',
			'and send us on our way,',
			'a donation to our honeymoon',
			'would really make our day.'
		],
		poemFinal: [
			'Just remember, what means the most',
			'Is that you\'re here with us to a raise a toast!'
		],
		rsvpYes: 'Yes',
		rsvpNo: 'No :(',
		rsvpNext: 'Next',
		rsvpConfirm: 'Confirm',
		rsvpCodeLabel: 'What is your RSVP code?',
		rsvpCodeHint: 'Hint: Its on your invite!',
		rsvpAttendingLabel: 'Will you be attending?',
		rsvpDietLabel: 'Do you have any dietary issues?',
		rsvpDietHint: 'e.g. I don\'t like desserts so give mine to Alex...',
	},
	HU: {
		home: 'Home',
		england: 'Anglia',
		hungary: 'Magyarország',
		gifts: 'Ajándék',
		rsvp: 'RSVP',
		welcome: 'Összeházasodunk!',
		address: 'Cím',
		website: 'Weboldal',
		hungarianVenue: 'Magyar Helyszín',
		englishVenue: 'Angol Helyszín',
		poem: [
			'Aki a nászunkra szép ajándékot adna,',
			'a reánk szánt összeget tegye borítékba:',
			'A legtöbbet ugyanis ez jelenti nékünk,',
			'mert bizony messzire húz minket a szívünk!',
			'Távoli vidékre, romantikus tájra,',
			'feledhetetlen kalandra, álmaink nászútjára!',
			'Szívből köszönünk hát minden kilométert,',
			'mit ajándékotokból együtt teszünk majd meg!'
		],
		poemFinal: [
			'A legfontosabb számunkra az,',
			'hogy ott legyél és érezd jól magad.'
		],
		rsvpYes: 'Igen',
		rsvpNo: 'Nem :(',
		rsvpNext: 'Következő',
		rsvpConfirm: 'Megerősít',
		rsvpCodeLabel: 'Mi az RSVP Kódod?',
		rsvpCodeHint: 'Ezt a meghívón talälod',
		rsvpAttendingLabel: 'Ott leszel?',
		rsvpDietLabel: 'Tudsz enni valamit?',
		rsvpDietHint: ''
	}
};

export default (key, countryCode = 'GB') => {
	const words = dictionary[countryCode];
	return words ? words[key] : dictionary['GB'][key];
}

export const fetchCountry = () => {
	return fetch('/api/geo')
			.then(res => {
				if (!res.ok) {
					throw Error(res.text);
				}
				return res;
			})
			.then(res => res.json());
}
