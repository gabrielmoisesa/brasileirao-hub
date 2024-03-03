const Scoreboard = ({ homeTeam, score, setScore, qtyGoal }) => (
  <label
    className='text-center'
    htmlFor={homeTeam ? 'home-team-scoreboard' : 'away-team-scoreboard'}
  >
    <p>Gols</p>
    <input
      className='w-20 text-center border border-gray-300 rounded-md'
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

export default Scoreboard;
