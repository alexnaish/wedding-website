import Link from 'next/link';

import Internationalised from '../Internationalised';
import './navigation.scss';

export default () => {
  return (
    <header className="header">
      <div className="main">Alex <span className="heart">&hearts;</span> Sara</div>
      <ul className="nav">
        <li className="nav__item"><Link href="/"><a><Internationalised word='home' /></a></Link></li>
        <li className="nav__item"><Link href="/england"><a><Internationalised word='england' /></a></Link></li>
        <li className="nav__item"><Link href="/hungary"><a><Internationalised word='hungary' /></a></Link></li>
        <li className="nav__item"><Link href="/gifts"><a><Internationalised word='gifts' /></a></Link></li>
        <li className="nav__item"><Link href="/rsvp"><a><Internationalised word='rsvp' /></a></Link></li>
      </ul>
    </header>
  );
};
