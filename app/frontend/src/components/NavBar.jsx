import NavBtn from './NavBtn';

const NavBar = () => {
  const links = [
    { link: '/', text: 'Home' },
    { link: '/leaderboard', text: 'Tabela' },
    { link: '/matches', text: 'Partidas' },
    { link: '/about', text: 'Sobre' },
  ];

  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <NavBtn link={link.link} text={link.text} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
