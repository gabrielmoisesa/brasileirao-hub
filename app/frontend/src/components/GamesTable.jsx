import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import { check, editIcon } from '../images';
import { useFetch } from '../services/useFetch';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const GamesTable = ({ currentFilter, isAdm }) => {
  const gamesUrl = `/matches${
    currentFilter === 'Em andamento'
      ? '?inProgress=true'
      : currentFilter === 'Finalizado'
      ? '?inProgress=false'
      : ''
  }`;

  const games = useFetch(gamesUrl);
  const { getTeamLogo } = useContext(GlobalContext);

  const navigate = useNavigate();

  if (!games) {
    return <Loading />;
  }

  return (
    <section>
      <div className='flex flex-col items-center'>
        {games.map(({ homeTeam, homeTeamGoals, awayTeam, awayTeamGoals }) => (
          <div key={uuidv4} className='flex bg-white border'>
            <div>
              <img
                src={getTeamLogo(homeTeam.teamName)}
                alt={`${homeTeam.teamName} Logo`}
                className='h-16'
              />
              <span>{homeTeam.teamName.slice(0, 3)}</span>
            </div>
            <div>
              <span>{homeTeamGoals}</span>
              <span> x </span>
              <span>{awayTeamGoals}</span>
            </div>
            <div>
              <img
                src={getTeamLogo(awayTeam.teamName)}
                alt={`${awayTeam.teamName} Logo`}
                className='h-16'
              />
              <span>{awayTeam.teamName.slice(0, 3)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GamesTable;
