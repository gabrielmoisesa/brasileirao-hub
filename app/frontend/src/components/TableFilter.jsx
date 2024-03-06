import SelectBtn from './SelectBtn';

const GamerFilter = ({ currentFilter, setCurrentFilter }) => {
  const handleCurrentFilter = () => {
    const selectedFilter = document.getElementById(
      'classification-filter'
    ).value;
    setCurrentFilter(selectedFilter);
  };

  return (
    <form className='flex flex-col items-center sm-2:space-x-2 sm-2:flex-row'>
      <label className='text-lg' htmlFor='classification-filter'>
        Partidas:
        <select
          className='h-8 ml-2 text-base bg-gray-100 border rounded-md w-44 border-gray-3'
          id='classification-filter'
          defaultValue={currentFilter}
        >
          <option>Classificação Geral</option>
          <option>Classificação Mandantes</option>
          <option>Classificação Visitantes</option>
        </select>
      </label>
      <SelectBtn handleCurrentFilter={handleCurrentFilter} />
    </form>
  );
};

export default GamerFilter;
