import styles from "./MoviesPage.module.css"
import { useState } from "react";
import { searchMovies } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  const handleSearch = async (e) => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value;
    if (query) {
      setSearchParams({ query });
      const results = await searchMovies(query);
      setMovies(results);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch} className={styles.form}>
        <input name="query" placeholder="Type movie name" defaultValue={query} className={styles.input}/>
        <button type="submit" className={styles.btn}>Search</button>
      </form>
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
