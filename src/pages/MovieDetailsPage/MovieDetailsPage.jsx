import styles from "./MovieDetailsPage.module.css"
import { useEffect, useState, Suspense, lazy } from "react";
import { useParams, Link, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../movies-api";

const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../../components/MovieReviews/MovieReviews"));

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const backLocation = location.state?.from || "/movies";

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return null;

  return (
    <div>
      <button onClick={() => navigate(backLocation)} className={styles.btn}>Go back</button>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />

      <ul>
        <li>
          <Link to={`cast`} state={{ from: backLocation }}>Cast</Link>
        </li>
        <li>
          <Link to={`reviews`} state={{ from: backLocation }}>Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;






