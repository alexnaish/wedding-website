import { renderToStaticMarkup } from 'react-dom/server'

import Divider from '../components/Divider';
import Section from '../components/Section';
import Internationalised from '../components/Internationalised';

const poemTransformer = val => val.map((line, index) => line ? <p key={index}>{line}</p> : <br key={index} />);

export default () => {
	return (
		<Section heading={<Internationalised word="gifts" />} textAlign="center">
			<Internationalised word="poem" transform={poemTransformer} />
			<Divider theme="dark" narrow={true} />
			<Internationalised word="poemFinal" transform={poemTransformer} />
		</Section>
	);
};
