import { useLocation, useNavigate } from 'react-router-dom';
import { exitToAppImg, positiveLogo } from '../images';
import NavBtn from './NavBtn';
import { useEffect, useState } from 'react';

const Header = () => {
  const [logged, setLogin] = useState(false);
  const navigate = useNavigate();
  const currPath = useLocation().pathname;

  useEffect(() => {
    const token = localStorage.getItem('token') || false;
    if (token) setLogin(true);
  }, []);

  const logoff = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setLogin(false);
    navigate('/leaderboard');
  };

  return (
    <header className='flex items-center h-20 px-10 text-white bg-blue-800 place-content-between md:h-24'>
      <div className='flex items-center space-x-1'>
        <span className='text-2xl font-bold '>Brasileirão Hub</span>
        <img
          src={positiveLogo}
          alt='Brasileirao Positive Logo'
          className='h-14'
        />
      </div>
      <div>
        {logged ? (
          <button type='button' onClick={() => logoff()}>
            Sair
            <img src={exitToAppImg} alt='Sair do aplicativo' />
          </button>
        ) : currPath === '/login' ? (
          <NavBtn link='/' text='Home' />
        ) : (
          <NavBtn link='/login' text='Login' />
        )}
      </div>
    </header>
  );
};

export default Header;
