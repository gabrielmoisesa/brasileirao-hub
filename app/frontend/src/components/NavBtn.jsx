import { Link } from 'react-router-dom';

const NavBtn = ({ link, text, className }) => (
  <Link className={className} to={link}>
    {text}
  </Link>
);

export default NavBtn;
