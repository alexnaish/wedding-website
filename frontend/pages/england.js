import Splash from '../components/Splash';
import Heading from '../components/Heading';
import Internationalised from '../components/Internationalised';
import VenueInfo from '../components/VenueInfo';
import Section from '../components/Section';
import AccomodationList from '../components/AccomodationList';

export default () => <div>
  <Splash image="sweden" />
  <Heading text={<Internationalised word="englishVenue" />} />
  <VenueInfo location="england" />
	<Section heading="Nearby Accomodation">
		<AccomodationList />
	</Section>
</div>;
