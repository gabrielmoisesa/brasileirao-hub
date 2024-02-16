import PropTypes from 'prop-types';

const TeamOption = ({ teams, homeTeam, getTeam }) => (
  <label
    className='font-semibold mx-5 text-center'
    htmlFor={homeTeam ? 'home-team-scoreboard' : 'away-team-scoreboard'}
  >
    {homeTeam ? <p>Time Mandante</p> : <p>Time Visitante</p>}
    <select
      className='cursor-pointer h-10 p-2'
      onChange={({ target: { value } }) => {
        const homeOrAway = homeTeam ? 'homeTeam' : 'awayTeam';
        getTeam(value, homeOrAway);
      }}
    >
      {teams.map(({ teamName }, index) => (
        <option key={index} value={teamName}>
          {teamName}
        </option>
      ))}
    </select>
  </label>
);

TeamOption.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
  homeTeam: PropTypes.bool.isRequired,
  getTeam: PropTypes.func.isRequired,
};

export default TeamOption;
