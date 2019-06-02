import Divider from '../Divider';

import './splash.scss';

export default ({ image }) => {
  return (
    <div className={`splash${image ? ` splash--${image}` : ''}`}>
      <h1 className="splash__title">We're getting married!</h1>
      <Divider />
    </div>
  );
};
