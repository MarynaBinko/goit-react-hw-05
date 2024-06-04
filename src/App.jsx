
import './App.css'
import HomePage from "./pages/HomePage/HomePage"
import MoviesPage from "./pages/MoviesPage/MoviesPage"
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import MovieCast from "./components/MovieCast/MovieCast"
import MovieReviews from "./components/MovieReviews/MovieReviews"
import { Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation/Navigation'

function App() {


  return (
    <>
    <Navigation/>
     <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/moviesPage" element={<MoviesPage />} />
     <Route path="/moviedetailspage:movieId" element={<MovieDetailsPage />}>
        <Route path="moviecast" element={<MovieCast />} />
        <Route path="moviereviews" element={<MovieReviews />} />
    </Route>
     <Route path="*" element={<NotFoundPage />} />
    </Routes>
    
    </>
  )
}

export default App

