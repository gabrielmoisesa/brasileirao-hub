const SelectBtn = ({ handleCurrentFilter }) => (
  <button
    className='w-24 h-8 text-white bg-blue-600 border rounded-md hover:bg-blue-800 disabled:hover:cursor-not-allowed'
    type='button'
    onClick={() => handleCurrentFilter()}
  >
    Buscar
  </button>
);

export default SelectBtn;
