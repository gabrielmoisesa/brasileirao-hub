import PropTypes from 'prop-types';

const Scoreboard = ({ homeTeam, score, setScore, qtyGoal }) => (
  <label
    className='text-center'
    htmlFor={homeTeam ? 'home-team-scoreboard' : 'away-team-scoreboard'}
  >
    <p>Gols</p>
    <input
      className='border-gray-300 border rounded-md text-center w-20'
      type='number'
      min='0'
      value={score}
      onChange={({ target: { value } }) => {
        if (value < qtyGoal) {
          setScore(qtyGoal);
        } else {
          setScore(value);
        }
      }}
    />
  </label>
);

Scoreboard.propTypes = {
  homeTeam: PropTypes.bool.isRequired,
  score: PropTypes.number,
  setScore: PropTypes.func.isRequired,
  qtyGoal: PropTypes.string,
};

Scoreboard.defaultProps = {
  score: undefined,
  qtyGoal: undefined,
};

export default Scoreboard;
