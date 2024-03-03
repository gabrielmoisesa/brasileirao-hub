const TeamOption = ({ teams, homeTeam, getTeam }) => (
  <label
    className='mx-5 font-semibold text-center'
    htmlFor={homeTeam ? 'home-team-scoreboard' : 'away-team-scoreboard'}
  >
    {homeTeam ? <p>Time Mandante</p> : <p>Time Visitante</p>}
    <select
      className='h-10 p-2 cursor-pointer'
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

export default TeamOption;
