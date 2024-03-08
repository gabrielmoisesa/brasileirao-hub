import Loading from './Loading';
import { useFetch } from '../services/useFetch';
import { v4 as uuidv4 } from 'uuid';
import MatchTeamCard from './MatchTeamCard';
import EditMatchBtn from './EditMatchBtn';

const GamesTable = ({ currentFilter, isAdm }) => {
  const gamesUrl = `/matches${
    currentFilter === 'Em andamento'
      ? '?inProgress=true'
      : currentFilter === 'Finalizado'
      ? '?inProgress=false'
      : ''
  }`;

  const games = useFetch(gamesUrl);

  if (!games) {
    return <Loading />;
  }

  return (
    <div>
      <div className='flex flex-col items-center space-y-4'>
        {games.map(
          ({
            id,
            inProgress,
            homeTeam,
            homeTeamGoals,
            awayTeam,
            awayTeamGoals,
          }) => (
            <div
              key={uuidv4()}
              className='flex items-center w-9/12 p-4 bg-white border place-content-evenly md:max-w-lg'
            >
              <MatchTeamCard teamName={homeTeam.teamName} />
              <div className='p-2 font-semibold bg-gray-100 rounded'>
                <span>{homeTeamGoals}</span>
                <span className='font-bold'> - </span>
                <span>{awayTeamGoals}</span>
              </div>
              <MatchTeamCard teamName={awayTeam.teamName} />
              <EditMatchBtn
                isAdm={isAdm}
                match={{
                  id,
                  inProgress,
                  homeTeam,
                  homeTeamGoals,
                  awayTeam,
                  awayTeamGoals,
                }}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default GamesTable;
