// import styles from "./MovieDetailsPage.module.css"
import { useParams } from "react-router-dom";


const MovieDetailsPage = () => {
  const { movieId } = useParams();
     
  return (   
    <div>
      <div>Now showing product with id - {movieId}</div>;
    </div>
  )
}

export default MovieDetailsPage





