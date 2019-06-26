import Splash from '../components/Splash';
import Heading from '../components/Heading';
import VenueInfo from '../components/VenueInfo';
import Section from '../components/Section';
import AccomodationList from '../components/AccomodationList';

export default () => <div>
  <Splash image="sweden" />
  <Heading text="English Venue" />
  <VenueInfo location="england" />
	<Section heading="Nearby Accomodation">
		<AccomodationList />
	</Section>
</div>;
