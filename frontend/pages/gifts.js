import { renderToStaticMarkup } from 'react-dom/server'

import Divider from '../components/Divider';
import Section from '../components/Section';
import Internationalised from '../components/Internationalised';

export default () => {
	return (
		<Section heading={<Internationalised word="gifts" />} textAlign="center">
			<Internationalised word="poem" transform={val => val.map((line, index) => line ? <p key={index}>{line}</p> : <br key={index} />)} />
			<Divider theme="dark" narrow={true} />
			<p>Just remember, what means the most</p>
			<p>Is that you're here with us to a raise a toast!</p>
		</Section>
	);
};
