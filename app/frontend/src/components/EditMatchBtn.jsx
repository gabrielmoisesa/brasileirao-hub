import { useNavigate } from 'react-router-dom';
import { check, editIcon } from '../images';

const EditMatchBtn = ({ isAdm, match }) => {
  const { id, inProgress, homeTeam, homeTeamGoals, awayTeam, awayTeamGoals } =
    match;

  const navigate = useNavigate();

  return isAdm ? (
    <button
      type='button'
      disabled={!inProgress}
      className='p-2 transition bg-gray-100 rounded-full'
      onClick={() => {
        navigate('/matches/settings', {
          state: {
            id,
            homeTeam,
            homeTeamGoals,
            awayTeam,
            awayTeamGoals,
            inProgress,
          },
        });
        localStorage.setItem('game', 'editar');
      }}
    >
      <img
        src={inProgress ? editIcon : check}
        alt={`Jogo ${inProgress ? 'em andamento' : 'finalizado'}`}
        className={inProgress ? 'cursor-pointer' : undefined}
      />
    </button>
  ) : null;
};

export default EditMatchBtn;
