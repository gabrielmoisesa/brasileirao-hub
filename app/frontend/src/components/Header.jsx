import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { negativeLogo, exitToAppImg } from '../images';

const Header = ({
  page,
  FirstNavigationLink,
  SecondNavegationLink,
  logged,
  setLogin,
}) => {
  const navigate = useNavigate();

  const logoff = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setLogin(false);
    navigate('/leaderboard');
  };

  return (
    <header className='items-center bg-green-600 flex justify-between px-9 py-2 text-white'>
      <div className='justify-start'>
        <img
          src={negativeLogo}
          alt='Brasileirao Negative Logo'
          className='w-20'
        />
      </div>
      <h1 className='text-2xl'>{page}</h1>
      <div className='space-x-5'>
        <FirstNavigationLink />
        {logged ? (
          <button type='button' onClick={() => logoff()}>
            Sair
            <img src={exitToAppImg} alt='Sair do aplicativo' />
          </button>
        ) : (
          <SecondNavegationLink />
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  page: PropTypes.string.isRequired,
  FirstNavigationLink: PropTypes.elementType.isRequired,
  SecondNavegationLink: PropTypes.elementType,
  logged: PropTypes.bool,
  setLogin: PropTypes.func,
};

Header.defaultProps = {
  SecondNavegationLink: null,
  logged: undefined,
  setLogin: undefined,
};

export default Header;
