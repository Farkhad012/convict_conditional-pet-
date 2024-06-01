import { Link } from 'react-router-dom';

import './styles.scss';

export default function LinkBtn({ textBtn, link }) {
  return (
    <Link
      to={link}
      className="link-btn"
    >
      {textBtn}
    </Link>
  )
}