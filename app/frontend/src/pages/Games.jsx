import { useState, useEffect } from 'react';
import GamesTable from '../components/GamesTable';
import GamerFilter from '../components/GameFilter';
import NavBtn from '../components/NavBtn';

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
        <div className='flex flex-col items-center px-10 pt-5 mb-5 space-y-5 md:pt-0 md:px-0'>
          <h1 className='text-3xl'>Partidas</h1>
          <GamerFilter
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
          {isAdm ? (
            <NavBtn
              link={'/matches/settings'}
              text={'+ Adicionar nova partida'}
              className={'underline font-bold'}
            />
          ) : null}
        </div>
        <GamesTable currentFilter={currentFilter} isAdm={isAdm} />
      </section>
    </>
  );
};

export default Games;
