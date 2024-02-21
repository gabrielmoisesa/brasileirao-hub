import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MatchesBtn = ({ className }) => (
  <Link className={className} to='/matches'>
    Partidas
  </Link>
);

MatchesBtn.propTypes = {
  className: PropTypes.string,
};

export default MatchesBtn;
