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
    <nav className='w-screen h-16 pt-4 pl-10 bg-white md:h-screen md:w-1/6 lg:w-52'>
      <ul className='flex space-x-3 md:block md:space-x-0 md:space-y-3 lg:text-lg'>
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
