import { useState } from 'react';
import PropTypes from 'prop-types';

import TeamOption from './TeamOption';
import Scoreboard from './Scoreboard';

const EditGame = ({
  homeTeam,
  awayTeam,
  homeTeamGoals,
  awayTeamGoals,
  idMatch,
  updateMatch,
  finishMatch,
  getTeam,
}) => {
  const [currentHomeTeamGoals, setHomeTeamGoals] = useState(homeTeamGoals);
  const [currentAwayTeamGoals, setAwayTeamGoals] = useState(awayTeamGoals);
  return (
    <section className='flex justify-center m-40'>
      <form className='flex-col bg-white shadow-lg h-96 px-32 py-16 space-y-10'>
        <div className='flex items-center'>
          <TeamOption teams={homeTeam} homeTeam getTeam={getTeam} />
          <Scoreboard
            homeTeam
            score={currentHomeTeamGoals}
            setScore={setHomeTeamGoals}
            qtyGoal={homeTeamGoals}
          />
          <div className='m-2 mt-7'>
            <span>X</span>
          </div>
          <Scoreboard
            homeTeam={false}
            score={currentAwayTeamGoals}
            setScore={setAwayTeamGoals}
            qtyGoal={awayTeamGoals}
          />
          <TeamOption teams={awayTeam} homeTeam={false} getTeam={getTeam} />
        </div>
        <div className='flex justify-center space-x-6'>
          <button
            className='border bg-blue-600 hover:bg-blue-800 text-white rounded-md h-10 w-40 disabled:hover:cursor-not-allowed'
            onClick={() =>
              updateMatch(idMatch, {
                homeTeamGoals: currentHomeTeamGoals,
                awayTeamGoals: currentAwayTeamGoals,
              })
            }
            type='button'
          >
            Editar
          </button>
          <button
            className='border border-blue-600 rounded-md h-10 w-40 disabled:hover:cursor-not-allowed'
            onClick={() => finishMatch(idMatch)}
            type='button'
          >
            Finalizar
          </button>
        </div>
      </form>
    </section>
  );
};

EditGame.propTypes = {
  homeTeam: PropTypes.any,
  awayTeam: PropTypes.any,
  homeTeamGoals: PropTypes.any,
  awayTeamGoals: PropTypes.any,
  idMatch: PropTypes.any,
  getTeam: PropTypes.any,
  finishMatc: PropTypes.any,
  updateMatch: PropTypes.any,
}.isRequired;

export default EditGame;
