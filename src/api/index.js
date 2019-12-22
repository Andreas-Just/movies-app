import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = 'api_key=04322954778d78bd6fc31bdc578dc2b0';

const getPopularMovies = (page=1) => axios.get(`movie/popular?${apiKey}&language=en-US&page=${page}`);
const getMovieByID = (id) => axios.get(`movie/${id}?${apiKey}`);
const getSimilarMovies = (id) => axios.get(`movie/${id}/similar?${apiKey}&language=en-US`);
const getSearchMovies = (newQuery) => axios.get(`search/movie?${apiKey}&language=en-US&query=${newQuery}&page=1`);

export {
  axios,
  getPopularMovies,
  getMovieByID,
  getSimilarMovies,
  getSearchMovies,
}

