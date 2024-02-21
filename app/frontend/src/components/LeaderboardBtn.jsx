import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LeaderboardBtn = ({ className }) => (
  <Link className={className} to='/leaderboard'>
    Classificação
  </Link>
);

LeaderboardBtn.propTypes = {
  className: PropTypes.string,
};

export default LeaderboardBtn;
