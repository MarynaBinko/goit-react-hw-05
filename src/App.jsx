
import './App.css'
import HomePage from "./pages/HomePage/HomePage"
import MoviesPage from "./pages/MoviesPage/MoviesPage"
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import MovieCast from "./components/MovieCast/MovieCast"
import MovieReviews from "./components/MovieReviews/MovieReviews"
import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation'
import { fetchMoviesApi } from '../../movies-api';

function App() {

  const onSearch = async (movie) => {
    try {
      const results = await fetchMoviesApi(movie);     
      console.log(results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <>
    <Navigation/>
     <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/movies" element={<MoviesPage onSearch={onSearch}/>} />
     <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
    </Route>
     <Route path="*" element={<NotFoundPage />} />
    </Routes>
    
    </>
  )
}

export default App

