import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBtn = ({ link, text, className }) => (
  <Link className={className} to={link}>
    {text}
  </Link>
);

NavBtn.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default NavBtn;
