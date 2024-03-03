import GlobalContext from './GlobalContext';
import { useFetch } from '../services/useFetch';

const GlobalProvider = ({ children }) => {
  const teams = useFetch('/teams');

  const contextValue = {
    teams,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
