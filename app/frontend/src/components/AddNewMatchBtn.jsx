import { Link } from 'react-router-dom';

const AddNewMatchBtn = () => (
  <div>
    <Link
      className="text-slate-800 underline font-bold"
      to="/matches/settings"
    >
      + Adicionar nova partida
    </Link>
  </div>
);

export default AddNewMatchBtn;
