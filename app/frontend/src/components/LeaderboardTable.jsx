import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { requestData } from '../services/requests';
import Loading from './Loading';
import { v4 as uuidv4 } from 'uuid';

const LeaderboardTable = ({ currentFilter }) => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [teams, setTeams] = useState([]);

  const getLeaderboard = (endpoint) =>
    requestData(endpoint)
      .then((response) => setLeaderboard(response))
      .catch((error) => console.log(error));

  const getTeams = (endpoint) =>
    requestData(endpoint)
      .then((response) => setTeams(response))
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
    const apiTeams = '/teams';
    getTeams(apiTeams);
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

  const getTeamLogo = (teamName) => {
    const team = teams.find((team) => team.teamName === teamName);
    return team.imageUrl;
  };

  const getResultBg = (result) => {
    switch (result) {
      case 'V':
        return 'bg-green-400';
      case 'D':
        return 'bg-red-400';
      default:
        return 'bg-gray-400';
    }
  };

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
            <th className='p-3 font-semibold'>Recentes</th>
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
                latestResults,
              },
              index
            ) => (
              <tr key={uuidv4()} className='bg-white border-b'>
                <td className='p-3'>
                  <span>{`${index + 1}º`}</span>
                  <img src={getTeamLogo(name)} alt={`${name} Logo`} />
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
                <td className='px-2'>{efficiency}</td>
                <td className='space-x-2 text-center'>
                  {latestResults.map((result) => (
                    <span
                      key={uuidv4()}
                      className={`${getResultBg(
                        result
                      )} rounded-lg text-xs px-1 text-white`}
                    >
                      {result}
                    </span>
                  ))}
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
