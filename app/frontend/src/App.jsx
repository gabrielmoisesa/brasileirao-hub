import { Route, Routes } from 'react-router-dom'
import './App.css'
import MatchSettings from './pages/MatchSettings'
import Leaderboard from './pages/Leaderboard'
import Games from './pages/Games'
import Login from './pages/Login'
import { Navigate } from 'react-router-dom'

function App() {
  return (
  <Routes>
    <Route exact path="/" element={ <Navigate to="/leaderboard" /> } />
    <Route path="matches/settings" element={ <MatchSettings /> } />
    <Route path="/leaderboard" element={ <Leaderboard /> } />
    <Route path="/matches" element={ <Games /> } />
    <Route path="/login" element={ <Login /> } />
  </Routes>
  )
}

export default App
