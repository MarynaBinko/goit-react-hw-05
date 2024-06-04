
import axios from "axios";

const ACCESS_KEY = "bf500bb6d572b7d3dc6526ac67fda59b";
const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjUwMGJiNmQ1NzJiN2QzZGM2NTI2YWM2N2ZkYTU5YiIsInN1YiI6IjY2NWYwNDEwZjVlMjQwNDA4M2Y4NWQyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SpdJQ_vH6ps7XHWmOcPLJobqrxzRtLJQalp-VcpJxdk";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;

export const fetchTrendingMovies = async () => {
  const response = await axios.get("trending/movie/day", {
    params: {
      api_key: ACCESS_KEY
    }
  });
  return response.data.results;
};

export const searchMovies = async (query) => {
  const response = await axios.get("search/movie", {
    params: {
      api_key: ACCESS_KEY,
      query,
      include_adult: false,
      language: "en-US",
      page: 1
    }
  });
  return response.data.results;
};

export const fetchMovieDetails = async (movieId) => {
  const response = await axios.get(`movie/${movieId}`, {
    params: {
      api_key: ACCESS_KEY,
      language: "en-US"
    }
  });
  return response.data;
};

export const fetchMovieCredits = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/credits`, {
    params: {
      api_key: ACCESS_KEY,
      language: "en-US"
    }
  });
  return response.data.cast;
};

export const fetchMovieReviews = async (movieId) => {
  const response = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      api_key: ACCESS_KEY,
      language: "en-US",
      page: 1
    }
  });
  return response.data.results;
};