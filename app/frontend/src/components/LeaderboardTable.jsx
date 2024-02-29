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
                <td className='w-16 h-12 text-center text-white bg-blue-900 border border-black'>
                  {`${index + 1}`}
                </td>
                <td className='w-16 text-center text-white bg-blue-800 border border-black'>
                  {name}
                </td>
                <td className='w-16 text-center bg-gray-100 border border-black'>
                  {totalPoints}
                </td>
                <td className='w-16 text-center bg-gray-200 border border-black'>
                  {totalGames}
                </td>
                <td className='w-16 text-center bg-gray-100 border border-black'>
                  {totalVictories}
                </td>
                <td className='w-16 text-center bg-gray-200 border border-black'>
                  {totalDraws}
                </td>
                <td className='w-16 text-center bg-gray-100 border border-black'>
                  {totalLosses}
                </td>
                <td className='w-16 text-center bg-gray-200 border border-black'>
                  {goalsFavor}
                </td>
                <td className='w-16 text-center bg-gray-100 border border-black'>
                  {goalsOwn}
                </td>
                <td className='w-16 text-center bg-gray-200 border border-black'>
                  {goalsBalance}
                </td>
                <td className='w-16 text-center bg-gray-100 border border-black'>
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
