import fetch from 'unfetch';

export const fetchCountry = () => {
    return fetch('http://ip-api.com/json')
      .then(res => {
        if (!res.ok) {
          throw Error(res.text);
				}
        return res;
      })
      .then(res => res.json());
};
