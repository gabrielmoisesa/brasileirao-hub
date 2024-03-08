import GlobalContext from './GlobalContext';
import { useFetch } from '../services/useFetch';

const GlobalProvider = ({ children }) => {
  const teams = useFetch('/teams');

  const getTeamLogo = (teamName) => {
    if (!teams) return undefined;
    const team = teams.find((team) => team.teamName === teamName);
    return team.imageUrl;
  };

  const contextValue = {
    getTeamLogo,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
