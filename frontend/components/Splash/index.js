import Divider from '../Divider';

import Internationalised from '../Internationalised';

import './splash.scss';

export default ({ image }) => {
  return (
    <div className={`splash${image ? ` splash--${image}` : ''}`}>
      <h1 className="splash__title"><Internationalised word="welcome" /></h1>
      <Divider />
    </div>
  );
};
