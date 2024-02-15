import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
  <Routes>
    <Route path="matches/settings" element={ <MatchSettings /> } />
    <Route path="/leaderboard" element={ <Leaderboard /> } />
    <Route path="/matches" element={ <Games /> } />
    <Route path="/login" element={ <Login /> } />
    <Route exact path="/" element={ <Navigate to="/leaderboard" /> } />
  </Routes>
  )
}

export default App
