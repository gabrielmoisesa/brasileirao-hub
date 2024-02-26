import { Route, Routes } from 'react-router-dom';
import MatchSettings from './pages/MatchSettings';
import Leaderboard from './pages/Leaderboard';
import Games from './pages/Games';
import Login from './pages/Login';
import { Navigate } from 'react-router-dom';
import Layout from './pages/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route exact path='/' element={<Navigate to='/leaderboard' />} />
        <Route path='matches/settings' element={<MatchSettings />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/matches' element={<Games />} />
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
