import './venue.scss';

import Internationalised from '../Internationalised';

const getAddress = (location) => {
  switch (location) {
    case 'england':
      return 'The Darenth, Station Road, Shoreham, Sevenoaks, Kent TN14 7SA';
    case 'hungary':
      return 'Kostel, Kestölc';
  }
};

const getWebsite = (location) => {
  switch (location) {
    case 'england':
      return 'https://www.thedarenth.com/';
    case 'hungary':
      return 'http://kostel.hu/';
  }
};

const getEmbedUrl = (location) => {
  switch (location) {
    case 'england':
      return 'https://snazzymaps.com/embed/155810';
    case 'hungary':
      return 'https://snazzymaps.com/embed/156090';
  }
};

const getVenueInformation = (location) => {
  return {
    address: getAddress(location),
    website: getWebsite(location),
    map: getEmbedUrl(location)
  };
};

export default ({ location }) => {
  const information = getVenueInformation(location);
  return (
    <div className="venue">
      <div className="venue__info">
        <div className="venue__info-details">
          <strong><Internationalised word="address" />:</strong> {information.address}
        </div>
        <div className="venue__info-details">
          <strong><Internationalised word="website" />:</strong> <a href={information.website}>{information.website}</a>
        </div>
      </div>
      <div className="venue__map">
        <iframe id="gmap_canvas" src={information.map} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
      </div>
    </div>
  );
};
