import SelectBtn from './SelectBtn';

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
      <SelectBtn handleCurrentFilter={handleCurrentFilter} />
    </form>
  );
};

export default GamerFilter;
