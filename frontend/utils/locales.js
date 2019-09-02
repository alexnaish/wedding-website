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
