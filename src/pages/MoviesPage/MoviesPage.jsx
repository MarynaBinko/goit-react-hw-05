// import styles from "./MoviesPage.module.css"
import { Link, Outlet } from "react-router-dom";


const MoviesPage = () => {
  return (
    <div>
      <h1>Movies Page</h1>
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
  )
}

export default MoviesPage
