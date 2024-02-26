import { useState, useEffect } from 'react';
import GamesTable from '../components/GamesTable';
import AddNewMatchBtn from '../components/AddNewMatchBtn';
import GamerFilter from '../components/GameFilter';

const Games = () => {
  const [currentFilter, setCurrentFilter] = useState('Status do Jogo');
  const [isAdm, setIsAdm] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem('role') || false;
    setIsAdm(role === 'admin');
  }, []);

  return (
    <>
      <section>
        <div>
          <GamerFilter
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
          {isAdm ? <AddNewMatchBtn /> : null}
        </div>
        <GamesTable currentFilter={currentFilter} isAdm={isAdm} />
      </section>
    </>
  );
};

export default Games;
