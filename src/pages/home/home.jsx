import { Link } from "react-router-dom";

import styles from "./home.module.scss";

const Home = () => {

  return (
    <div className={styles.container}>
      <h1>Super Home</h1>
      <Link to="/usuarios" className={styles.link_1}>Ver Usarios</Link>
      <Link to="/usuario/:idPais" className={styles.link_2}>Ver Usarios por país</Link>
    </div>
  );
};

export { Home };