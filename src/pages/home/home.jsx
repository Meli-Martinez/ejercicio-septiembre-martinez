import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div>
      <h1>Super Home</h1>
      <Link to="/usuarios">Ver Usarios</Link>
      <Link to="/usuarios/:idPais">Ver Usarios por país</Link>
    </div>
  );
};

export { Home };