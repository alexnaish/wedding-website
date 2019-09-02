import fetch from 'unfetch';

export default {
  access: (code) => {
    return fetch(`/api/access-details?code=${(code || '').toLowerCase()}`)
      .then(res => {
        if (!res.ok) {
          throw Error(res.text);
        }
        return res;
      })
      .then(res => res.json());
  },
  update: (values) => {
		return fetch('/api/update-details', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) })
			.then(res => {
				if (!res.ok) {
					throw Error(res.text);
				}
				return res;
			})
			.then(res => res.json());
  }
};
