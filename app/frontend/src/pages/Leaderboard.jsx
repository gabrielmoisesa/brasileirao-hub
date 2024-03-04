import { useState } from 'react';
import LeaderboardTable from '../components/LeaderboardTable';
import TableFilter from '../components/TableFilter';

const Leaderboard = () => {
  const [currentFilter, setCurrentFilter] = useState('Classificação Geral');

  return (
    <>
      <div className='px-10 pt-5 mb-5 space-y-5 md:pt-0 md:px-0 md:flex md:flex-col md:items-center'>
        <h1 className='text-3xl'>Tabela</h1>
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
