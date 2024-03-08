import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

const MatchTeamCard = ({ teamName }) => {
  const { getTeamLogo } = useContext(GlobalContext);

  return (
    <div>
      <img
        src={getTeamLogo(teamName)}
        alt={`${teamName} Logo`}
        className='h-16'
      />
      <span>{teamName.slice(0, 3)}</span>
    </div>
  );
};

export default MatchTeamCard;
