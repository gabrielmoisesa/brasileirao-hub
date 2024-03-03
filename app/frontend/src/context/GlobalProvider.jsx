import GlobalContext from './GlobalContext';
import { useFetch } from '../services/useFetch';

const GlobalProvider = ({ children }) => {
  const { data: teams, isPending } = useFetch('/teams');

  const contextValue = {
    teams,
    isPending,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
