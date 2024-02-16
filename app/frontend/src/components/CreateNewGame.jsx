import { useState } from 'react';
import PropTypes from 'prop-types';

import TeamOption from './TeamOption';
import Scoreboard from './Scoreboard';

const CreateNewGame = ({
  teams,
  setTeams,
  getTeam,
  homeTeamScoreboard,
  setHomeTeamScoreboard,
  awayTeamScoreboard,
  setAwayTeamScoreboard,
  createMatch,
  finishMatch,
}) => {
  const notCreated = 'not-created';
  const [inProgress, setInProgress] = useState(notCreated);
  const [createdMatch, setCreatedMatch] = useState(notCreated);

  return (
    <section className='flex justify-center m-40'>
      <form className='flex-col bg-white shadow-lg h-96 px-32 py-16 space-y-10'>
        <div className='flex items-center'>
          <TeamOption
            teams={teams}
            setTeams={setTeams}
            homeTeam
            getTeam={getTeam}
          />
          <Scoreboard
            homeTeam
            score={homeTeamScoreboard}
            setScore={setHomeTeamScoreboard}
          />
          <div className='m-2 mt-7'>
            <span>X</span>
          </div>
          <Scoreboard
            homeTeam={false}
            score={awayTeamScoreboard}
            setScore={setAwayTeamScoreboard}
          />
          <TeamOption
            teams={teams}
            setTeams={setTeams}
            homeTeam={false}
            getTeam={getTeam}
          />
        </div>
        <div className='flex justify-center space-x-6'>
          <button
            className='border bg-blue-600 hover:bg-blue-800 text-white rounded-md h-10 w-40 disabled:hover:cursor-not-allowed'
            onClick={async () => {
              const body = await createMatch();
              setCreatedMatch(body);
              setInProgress('In-Progress');
            }}
            type='button'
            disabled={inProgress !== notCreated}
          >
            Salvar Partida
          </button>
          <button
            className='border border-blue-600 rounded-md h-10 w-40 disabled:hover:cursor-not-allowed'
            onClick={() => {
              finishMatch(createdMatch.id);
            }}
            type='button'
            disabled={inProgress === notCreated}
          >
            Finalizar Partida
          </button>
        </div>
      </form>
    </section>
  );
};

CreateNewGame.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object),
  setTeams: PropTypes.func,
  getTeam: PropTypes.func,
  homeTeamScoreboard: PropTypes.string,
  setHomeTeamScoreboard: PropTypes.func,
  awayTeamScoreboard: PropTypes.string,
  setAwayTeamScoreboard: PropTypes.func,
}.isRequired;

export default CreateNewGame;
