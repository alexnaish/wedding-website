import Heading from '../Heading';

import './section.scss';

export default ({ heading, intro, children }) => {
  return (
    <div className="section">
      <Heading text={heading} />
      {
        intro && <div className="section__intro">{ intro }</div>
      }
      { children }
    </div >
  );
};
