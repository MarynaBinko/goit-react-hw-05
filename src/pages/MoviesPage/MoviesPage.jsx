// import styles from "./MoviesPage.module.css"
import { Link, Outlet } from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom"; 


const MoviesPage = ({onSearch}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name") || ""; 
  const navigate = useNavigate();

   

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const movie = form.elements.movie.value;
    if (movie === "") {
      return;
    }
    onSearch(movie);
    form.reset();
  };

  return (
    <div>
      <h1>Movies Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="movie" 
          placeholder="Type movie name"
          value={name}
          onChange={e => setSearchParams({ name: e.target.value })}
        />
        <button type="submit">Movie Search</button>
      </form>

      <ul>
        <li>
          <Link to="moviecast">Movie Cast</Link>
        </li>
        <li>
          <Link to="moviereviews">Movie Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default MoviesPage;