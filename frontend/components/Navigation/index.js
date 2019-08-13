import Link from 'next/link';

import './navigation.scss';

export default () => {
  return (
    <header className="header">
      <div className="main">Alex <span className="heart">&hearts;</span> Sara</div>
      <ul className="nav">
        <li className="nav__item"><Link href="/"><a>Home</a></Link></li>
        <li className="nav__item"><Link href="/england"><a>England</a></Link></li>
        <li className="nav__item"><Link href="/hungary"><a>Hungary</a></Link></li>
        <li className="nav__item"><Link href="/gifts"><a>Gifts</a></Link></li>
        <li className="nav__item"><Link href="/rsvp"><a>RSVP</a></Link></li>
      </ul>
    </header>
  );
};
