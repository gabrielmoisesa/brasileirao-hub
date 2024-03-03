import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestData } from '../services/requests';
import Loading from './Loading';
import { check, editIcon } from '../images';

const GamesTable = ({ currentFilter, isAdm }) => {
  const [games, setGames] = useState([]);

  const navigate = useNavigate();

  const getGames = (endpoint) =>
    requestData(endpoint)
      .then((response) => setGames(response))
      .catch((error) => console.log(error));

  useEffect(() => {
    const endpoint = '/matches';

    switch (currentFilter) {
      case 'Em andamento':
        getGames(`${endpoint}?inProgress=true`);
        break;
      case 'Finalizado':
        getGames(`${endpoint}?inProgress=false`);
        break;
      default:
        getGames(endpoint);
        break;
    }
  }, [currentFilter]);

  useEffect(() => {
    const endpoint = '/matches';

    if (!games.length) {
      getGames(endpoint);
    }
  }, [games]);

  if (!games.length) {
    return <Loading />;
  }

  return (
    <table className='flex flex-col items-center w-full'>
      <thead className='m-2 bg-white shadow-md w-fit'>
        <tr className='flex flex-rows'>
          <th>Time Mandante</th>
          <th>Gols</th>
          <th>Gols</th>
          <th>Time Visitante</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {games
          .sort((a, b) => b.inProgress - a.inProgress)
          .map(
            ({
              id,
              homeTeam,
              homeTeamGoals,
              awayTeam,
              awayTeamGoals,
              inProgress,
            }) => (
              <tr key={id}>
                <td>{homeTeam.teamName}</td>
                <td>{homeTeamGoals}</td>
                <td>X</td>
                <td>{awayTeamGoals}</td>
                <td>{awayTeam.teamName}</td>
                <td>
                  <div>
                    {inProgress ? <p>Em andamento</p> : <p>Finalizado</p>}
                  </div>
                  {isAdm ? (
                    <button
                      type='button'
                      disabled={!inProgress}
                      onClick={() => {
                        navigate('/matches/settings', {
                          state: {
                            id,
                            homeTeam,
                            homeTeamGoals,
                            awayTeam,
                            awayTeamGoals,
                            inProgress,
                          },
                        });
                        localStorage.setItem('game', 'editar');
                      }}
                    >
                      {inProgress ? (
                        <img src={editIcon} alt='Jogo em andamento' />
                      ) : (
                        <img src={check} alt='Jogo finalizado' />
                      )}
                    </button>
                  ) : null}
                </td>
              </tr>
            )
          )}
      </tbody>
    </table>
  );
};

export default GamesTable;
