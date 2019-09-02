import { useContext, memo } from 'react';

import CountryContext from '../../contexts/country';
import getLocaleWord from '../../utils/locales';

const NOOP = (val) => val;

export default memo(({ word, transform = NOOP }) => {
	const countryCode = useContext(CountryContext);
  return transform(getLocaleWord(word, countryCode));
});
