import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <>
      <Header />
      <div className='flex'>
        <NavBar />
        <main className='flex flex-col w-full items-center'>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
