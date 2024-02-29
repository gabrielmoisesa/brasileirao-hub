import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <>
      <Header />
      <div className='md:flex'>
        <NavBar />
        <main className='w-full p-10'>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
