import styles from "./MovieList.module.css"

import { Link } from "react-router-dom";

const MovieList = ({ movies }) => (
  <ul className={styles.list}>
    {movies.map(movie => (
      <li key={movie.id} className={styles.listItem}>
        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
      </li>
    ))}
  </ul>
);

export default MovieList;

