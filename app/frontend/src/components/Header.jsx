import { useNavigate } from 'react-router-dom';
import { exitToAppImg, positiveLogo } from '../images';
import NavBtn from './NavBtn';
import { useEffect, useState } from 'react';

const Header = () => {
  const [logged, setLogin] = useState(false);
  const navigate = useNavigate();

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
    <header className='flex items-center place-content-between h-24 px-10 bg-white'>
      <div className='flex items-center space-x-1'>
        <span className='text-2xl'>Brasileirão Hub</span>
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
        ) : (
          <NavBtn link='/login' text='Login' />
        )}
      </div>
    </header>
  );
};

export default Header;
