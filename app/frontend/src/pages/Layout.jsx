import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
