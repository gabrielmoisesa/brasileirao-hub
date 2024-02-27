import NavBtn from './NavBtn';

const Sidebar = () => {
  const links = [
    { link: '/', text: 'Home' },
    { link: '/leaderboard', text: 'Tabela' },
    { link: '/matches', text: 'Partidas' },
    { link: '/about', text: 'Sobre' },
  ];

  return (
    <aside>
      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <NavBtn link={link.link} text={link.text} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
