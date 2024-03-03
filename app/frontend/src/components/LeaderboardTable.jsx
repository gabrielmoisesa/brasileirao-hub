import { useContext } from 'react';
import Loading from './Loading';
import { v4 as uuidv4 } from 'uuid';
import GlobalContext from '../context/GlobalContext';
import { useFetch } from '../services/useFetch';

const LeaderboardTable = ({ currentFilter }) => {
  const leaderboardUrl = `/leaderboard${
    currentFilter === 'Classificação Mandantes'
      ? '/home'
      : currentFilter === 'Classificação Visitantes'
      ? '/away'
      : ''
  }`;

  const leaderboard = useFetch(leaderboardUrl);
  const { teams } = useContext(GlobalContext);

  if (!leaderboard || !teams) {
    return <Loading />;
  }

  const getTeamLogo = (teamName) => {
    if (!teams) return undefined;
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
                <td className='flex p-3'>
                  <span className='w-7'>{`${index + 1}º`}</span>
                  <img
                    src={getTeamLogo(name)}
                    alt={`${name} Logo`}
                    className='h-8 ml-1 mr-3'
                  />
                  <span>{name}</span>
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

export default LeaderboardTable;
