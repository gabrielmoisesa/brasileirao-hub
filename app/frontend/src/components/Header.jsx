import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { exitToAppImg, positiveLogo } from '../images';
import LeaderboardBtn from './LeaderboardBtn';
import MatchesBtn from './MatchesBtn';
import LoginBtn from './LoginBtn';
import { useEffect, useState } from 'react';

const Header = ({
  FirstNavLink = LeaderboardBtn,
  SecondNavLink = MatchesBtn,
  ThirdNavLink = LoginBtn,
}) => {
  const [logged, setLogin] = useState(false);
  const navigate = useNavigate();
  const pathName = useLocation().pathname;

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

  const activePageClass = 'underline';

  return (
    <header className='flex items-center text-white'>
      <div className='h-24 flex items-center ml-4 mr-1'>
        <img
          src={positiveLogo}
          alt='Brasileirao Positive Logo'
          className='h-24 w-28'
        />
      </div>
      <span className='angled-header'></span>
      <div className='bg-blue-800 h-24 w-full pl-4 flex items-center space-x-7'>
        <FirstNavLink
          className={pathName === '/leaderboard' && activePageClass}
        />
        <SecondNavLink className={pathName === '/matches' && activePageClass} />
        {logged ? (
          <button type='button' onClick={() => logoff()}>
            Sair
            <img src={exitToAppImg} alt='Sair do aplicativo' />
          </button>
        ) : (
          <ThirdNavLink className={pathName === '/login' && activePageClass} />
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  logged: PropTypes.bool,
  setLogin: PropTypes.func,
  page: PropTypes.number,
  FirstNavLink: PropTypes.elementType,
  SecondNavLink: PropTypes.elementType,
  ThirdNavLink: PropTypes.elementType,
};

export default Header;
