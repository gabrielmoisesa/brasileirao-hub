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
    <section className='flex flex-col items-center mb-6'>
      <table>
        <thead>
          <tr>
            <th>Classificação</th>
            <th>Time</th>
            <th>P</th>
            <th>J</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
            <th>GP</th>
            <th>GC</th>
            <th>SG</th>
            <th>%</th>
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
              <tr key={uuidv4()}>
                <td className='bg-green-700 text-white text-center border border-black w-16 h-12'>
                  {`${index + 1}`}
                </td>
                <td className='bg-green-600 text-white text-center border border-black w-16'>
                  {name}
                </td>
                <td className='bg-gray-100 text-center border border-black w-16'>
                  {totalPoints}
                </td>
                <td className='bg-gray-200 text-center border border-black w-16'>
                  {totalGames}
                </td>
                <td className='bg-gray-100 text-center border border-black w-16'>
                  {totalVictories}
                </td>
                <td className='bg-gray-200 text-center border border-black w-16'>
                  {totalDraws}
                </td>
                <td className='bg-gray-100 text-center border border-black w-16'>
                  {totalLosses}
                </td>
                <td className='bg-gray-200 text-center border border-black w-16'>
                  {goalsFavor}
                </td>
                <td className='bg-gray-100 text-center border border-black w-16'>
                  {goalsOwn}
                </td>
                <td className='bg-gray-200 text-center border border-black w-16'>
                  {goalsBalance}
                </td>
                <td className='bg-gray-200 text-center border border-black w-16'>
                  {efficiency}
                </td>
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
