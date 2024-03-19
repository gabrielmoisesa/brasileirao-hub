import SelectBtn from './SelectBtn';

const GamerFilter = ({ currentFilter, setCurrentFilter }) => {
  const handleCurrentFilter = () => {
    const selectedFilter = document.getElementById('game-filter').value;
    setCurrentFilter(selectedFilter);
  };

  return (
    <form className='flex flex-col items-center space-y-4 sm-2:flex-row sm-2:space-x-2 sm-2:space-y-0'>
      <label className='text-lg' htmlFor='game-filter'>
        Filtro:
        <select
          className='h-8 ml-2 text-base bg-gray-100 border rounded-md w-44 border-gray-3'
          id='game-filter'
          defaultValue={currentFilter}
        >
          <option>Todos os Jogos</option>
          <option>Em andamento</option>
          <option>Finalizado</option>
        </select>
      </label>
      <SelectBtn handleCurrentFilter={handleCurrentFilter} />
    </form>
  );
};

export default GamerFilter;
