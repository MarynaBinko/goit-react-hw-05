// import styles from "./MovieCast.module.css"

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../movies-api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.cast_id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
