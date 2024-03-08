import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import { check, editIcon } from '../images';
import { useFetch } from '../services/useFetch';
import { v4 as uuidv4 } from 'uuid';
import MatchTeamCard from './MatchTeamCard';

const GamesTable = ({ currentFilter, isAdm }) => {
  const gamesUrl = `/matches${
    currentFilter === 'Em andamento'
      ? '?inProgress=true'
      : currentFilter === 'Finalizado'
      ? '?inProgress=false'
      : ''
  }`;

  const games = useFetch(gamesUrl);

  const navigate = useNavigate();

  if (!games) {
    return <Loading />;
  }

  return (
    <section>
      <div className='flex flex-col items-center space-y-4'>
        {games.map(({ homeTeam, homeTeamGoals, awayTeam, awayTeamGoals }) => (
          <div
            key={uuidv4()}
            className='flex items-center w-9/12 p-4 bg-white border place-content-evenly'
          >
            <MatchTeamCard teamName={homeTeam.teamName} />
            <div className='p-2 font-semibold bg-gray-100 rounded'>
              <span>{homeTeamGoals}</span>
              <span className='font-bold'> - </span>
              <span>{awayTeamGoals}</span>
            </div>
            <MatchTeamCard teamName={awayTeam.teamName} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GamesTable;
