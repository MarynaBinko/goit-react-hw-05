import styles from "./Navigation.module.css"

import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav>
    <NavLink to="/" exact className={styles.home}>Home</NavLink>
    <NavLink to="/movies" className={styles.movies}>Movies</NavLink>
  </nav>
);

export default Navigation;
