import { useState } from 'react';
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
      <form className='flex-col px-32 py-16 space-y-10 bg-white shadow-lg h-96'>
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
            className='w-40 h-10 text-white bg-blue-600 border rounded-md hover:bg-blue-800 disabled:hover:cursor-not-allowed'
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
            className='w-40 h-10 border border-blue-600 rounded-md disabled:hover:cursor-not-allowed'
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

export default EditGame;
