import Splash from '../components/Splash';
import Heading from '../components/Heading';
import Internationalised from '../components/Internationalised';
import VenueInfo from '../components/VenueInfo';

export default () => <div>
  <Splash image="ireland"/>
  <Heading text={<Internationalised word="hungarianVenue" />} />
  <VenueInfo location="hungary" />
</div>;
