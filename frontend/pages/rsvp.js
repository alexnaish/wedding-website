import { Split, SplitPane } from '../components/Split';
import RSVP from '../components/RSVP';

export default () => {
  return (
    <Split>
      <SplitPane style={{ background: '#ebc064', color: 'white' }}>
        <RSVP />
      </SplitPane>
      <SplitPane style={{ flexGrow: 1 }}>
        <img style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', objectFit: 'cover' }} src="/static/images/reading.jpeg" />
      </SplitPane>
    </Split>
  );
};
