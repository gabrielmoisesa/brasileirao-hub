import PropTypes from 'prop-types';

const GamerFilter = ({ currentFilter, setCurrentFilter }) => {
  const handleCurrentFilter = () => {
    const selectedFilter = document.getElementById(
      'classification-filter'
    ).value;
    setCurrentFilter(selectedFilter);
  };

  return (
    <form className='flex items-center space-x-6'>
      <label className='text-lg' htmlFor='classification-filter'>
        Partidas:
        <select
          className='h-8 ml-2 text-base bg-gray-100 border rounded-md border-gray-3'
          id='classification-filter'
          defaultValue={currentFilter}
        >
          <option>Classificação Geral</option>
          <option>Classificação Mandantes</option>
          <option>Classificação Visitantes</option>
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
