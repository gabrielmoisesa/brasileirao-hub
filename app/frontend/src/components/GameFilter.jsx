import PropTypes from 'prop-types';

const GamerFilter = ({ currentFilter, setCurrentFilter }) => {
  const handleCurrentFilter = () => {
    const selectedFilter = document.getElementById('game-filter').value;
    setCurrentFilter(selectedFilter);
  };

  return (
    <form>
      <label htmlFor='game-filter'>
        Partidas:
        <select id='game-filter' defaultValue={currentFilter}>
          <option>Todos os Jogos</option>
          <option>Em andamento</option>
          <option>Finalizado</option>
        </select>
      </label>
      <button
        className='border bg-blue-600 hover:bg-blue-800 text-white rounded-md h-10 w-40 disabled:hover:cursor-not-allowed'
        type='button'
        onClick={() => handleCurrentFilter()}
      >
        Buscar
      </button>
    </form>
  );
};

GamerFilter.propTypes = {
  currentFilter: PropTypes.string,
  setCurrentFilter: PropTypes.func,
}.isRequired;

export default GamerFilter;
