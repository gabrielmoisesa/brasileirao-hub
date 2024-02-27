import { useState } from 'react';
import LeaderboardTable from '../components/LeaderboardTable';
import TableFilter from '../components/TableFilter';

const Leaderboard = () => {
  const [currentFilter, setCurrentFilter] = useState('Classificação Geral');

  return (
    <>
      <div>
        <TableFilter
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />
      </div>
      <LeaderboardTable
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
    </>
  );
};

export default Leaderboard;
