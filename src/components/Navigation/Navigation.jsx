// import styles from "./Navigation.module.css"
import { Link } from "react-router-dom";


const Navigation = () => {
  return (
<nav>
  <Link to="/">HomePage</Link>
  <Link to="/moviespage">MoviesPage</Link>
  <Link to="/moviedetailspage">MovieDetailsPage</Link>
</nav>
  )
}

export default Navigation

