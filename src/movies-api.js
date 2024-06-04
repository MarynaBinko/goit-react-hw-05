import axios from "axios";

const ACCESS_KEY = "bf500bb6d572b7d3dc6526ac67fda59b";
const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjUwMGJiNmQ1NzJiN2QzZGM2NTI2YWM2N2ZkYTU5YiIsInN1YiI6IjY2NWYwNDEwZjVlMjQwNDA4M2Y4NWQyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SpdJQ_vH6ps7XHWmOcPLJobqrxzRtLJQalp-VcpJxdk";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const fetchMoviesApi = async () => {
  try {
    const response = await axios.get("trending/movie/day", {
      params: {      
        api_key: ACCESS_KEY
      },
      headers: { 
        Authorization: `Bearer ${TOKEN}`
      }
    });

    console.log("API response:", response.data);
    
    return response.data.results; 
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};