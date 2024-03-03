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
        className='w-40 h-10 text-white bg-blue-600 border rounded-md hover:bg-blue-800 disabled:hover:cursor-not-allowed'
        type='button'
        onClick={() => handleCurrentFilter()}
      >
        Buscar
      </button>
    </form>
  );
};

export default GamerFilter;
