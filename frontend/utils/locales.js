const dictionary = {
	GB: {
		home: 'Home',
		england: 'England',
		hungary: 'Hungary',
		gifts: 'Gifts',
		rsvp: 'RSVP',
		welcome: 'We\'re getting married!'
	},
	HU: {
		home: 'Home',
		england: 'Anglia',
		hungary: 'Magyarország',
		gifts: 'Ajándékok',
		rsvp: 'RSVP',
		welcome: 'Összeházasodunk!'
	}
};

export default (key, countryCode = 'GB') => {
	const words = dictionary[countryCode];
	return words ? words[key] : dictionary['GB'][key];
}
