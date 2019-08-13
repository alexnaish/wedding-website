import Heading from '../Heading';

import './section.scss';

export default ({ heading, intro, textAlign, children }) => {
  return (
    <div className="section" style={{textAlign}}>
      <Heading text={heading} />
      {
        intro && <div className="section__intro">{ intro }</div>
      }
      { children }
    </div >
  );
};
