import { useLocation } from 'react-router-dom';
import NavBtn from './NavBtn';

const NavBar = () => {
  const currPath = useLocation().pathname;

  const routes = [
    { link: '/', text: 'Home' },
    { link: '/leaderboard', text: 'Tabela' },
    { link: '/matches', text: 'Partidas' },
    { link: '/about', text: 'Sobre' },
  ];

  return (
    <nav className='h-screen w-1/6 pt-4 pl-4 bg-gray-100 border'>
      <ul className='space-y-1'>
        {routes.map((route, index) => (
          <li key={index}>
            <NavBtn
              link={route.link}
              text={route.text}
              className={route.link === currPath && 'text-blue-700'}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
