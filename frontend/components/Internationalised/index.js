import { useContext, memo } from 'react';

import CountryContext from '../../contexts/country';
import getLocaleWord from '../../utils/locales';

export default memo(({ word }) => {
	const countryCode = useContext(CountryContext);
  return getLocaleWord(word, countryCode);
});
