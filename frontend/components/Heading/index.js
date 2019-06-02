import Divider from '../Divider';

import './heading.scss';

export default ({ text, theme = 'dark', narrow = true }) => {
  return (
    <div className="heading">
      <div className="heading__title">{ text }</div>
      <Divider theme={theme} narrow={narrow} />
    </div>
  );
};
