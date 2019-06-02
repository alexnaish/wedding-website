import Link from 'next/link';

import './button.scss';

export default ({ path, text }) => {
  return (
    <Link className="button" href={path}>{text}</Link>
  );
};
