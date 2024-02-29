import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { requestData } from '../services/requests';
import Loading from './Loading';
import { v4 as uuidv4 } from 'uuid';

const LeaderboardTable = ({ currentFilter }) => {
  const [leaderboard, setLeaderboard] = useState([]);

  const getLeaderboard = (endpoint) =>
    requestData(endpoint)
      .then((response) => setLeaderboard(response))
      .catch((error) => console.log(error));

  useEffect(() => {
    const apiLeaderboard = '/leaderboard';
    const apiLeaderboardHome = '/leaderboard/home';
    const apiLeaderboardAway = '/leaderboard/away';
    switch (currentFilter) {
      case 'Classificação Mandantes':
        getLeaderboard(apiLeaderboardHome);
        break;
      case 'Classificação Visitantes':
        getLeaderboard(apiLeaderboardAway);
        break;
      default:
        getLeaderboard(apiLeaderboard);
        break;
    }
  }, [currentFilter]);

  useEffect(() => {
    const endpoint = '/leaderboard';

    if (leaderboard.length === 0) {
      getLeaderboard(endpoint);
    }
  }, [leaderboard]);

  if (!leaderboard.length) {
    return <Loading />;
  }

  return (
    <section className='md:flex md:justify-center'>
      <table className='border table-auto'>
        <thead className='bg-gray-100 border-b'>
          <tr>
            <th className='p-3 font-semibold text-start'>Posição</th>
            {['PTS', 'J', 'V', 'E', 'D', 'GP', 'GC', 'SG', '%'].map((item) => (
              <th key={uuidv4()} className='w-10 font-semibold'>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {leaderboard.map(
            (
              {
                name,
                totalPoints,
                totalGames,
                totalVictories,
                totalDraws,
                totalLosses,
                goalsFavor,
                goalsOwn,
                goalsBalance,
                efficiency,
              },
              index
            ) => (
              <tr key={uuidv4()} className='bg-white border-b'>
                <td className='p-3'>
                  {`${index + 1}º`}
                  <span className='ml-4'>{name}</span>
                </td>
                <td className='font-bold text-center'>{totalPoints}</td>
                {[
                  totalGames,
                  totalVictories,
                  totalDraws,
                  totalLosses,
                  goalsFavor,
                  goalsOwn,
                  goalsBalance,
                ].map((item) => (
                  <td key={uuidv4()} className='w-10 text-center'>
                    {item}
                  </td>
                ))}
                <td className='px-3'>{efficiency}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </section>
  );
};

LeaderboardTable.propTypes = {
  currentFilter: PropTypes.string.isRequired,
};

export default LeaderboardTable;
