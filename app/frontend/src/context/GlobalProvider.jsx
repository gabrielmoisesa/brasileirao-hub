/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { requestData } from '../services/requests';
import GlobalContext from './GlobalContext';

const GlobalProvider = ({ children }) => {
  const [teams, setTeams] = useState([]);

  const getTeams = (endpoint) =>
    requestData(endpoint)
      .then((response) => setTeams(response))
      .catch((error) => console.log(error));

  useEffect(() => {
    const apiTeams = '/teams';
    getTeams(apiTeams);
  }, []);

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
