import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LoginBtn = ({ className }) => (
  <Link className={className} to='/login'>
    Login
  </Link>
);

LoginBtn.propTypes = {
  className: PropTypes.string,
};

export default LoginBtn;
