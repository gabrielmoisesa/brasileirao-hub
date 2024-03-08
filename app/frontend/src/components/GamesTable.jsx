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
      <div className='flex flex-col items-center'>
        {games.map(({ homeTeam, homeTeamGoals, awayTeam, awayTeamGoals }) => (
          <div key={uuidv4} className='flex bg-white border'>
            <MatchTeamCard teamName={homeTeam.teamName} />
            <div>
              <span>{homeTeamGoals}</span>
              <span> x </span>
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
