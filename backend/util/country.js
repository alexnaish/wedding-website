import fetch from 'isomorphic-unfetch';

export const fetchCountry = (userIp) => {
	return fetch(`http://ip-api.com/json/${userIp}`)
		.then(res => {
			if (!res.ok) {
				throw Error(res.text);
			}
			return res;
		})
		.then(res => res.json());
};
