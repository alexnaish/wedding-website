import fetch from 'unfetch';

export default {
  access: async (code) => {
    return await fetch(`/api/access-details?code=${code}`)
      .then(res => {
        if (!res.ok) {
          throw Error(res.text);
        }
        return res;
      })
      .then(res => res.json());
  },
  update: async (values) => {
		return await fetch('/api/update-details', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) })
			.then(res => {
				if (!res.ok) {
					throw Error(res.text);
				}
				return res;
			})
			.then(res => res.json());
  }
};
