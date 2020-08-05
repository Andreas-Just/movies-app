import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.VUE_APP_API_KEY_MOVIEDB;

const getPopularMovies = (page=1) => axios.get(`movie/popular?${API_KEY}&language=en-US&page=${page}`);
const getMovieByID = (id) => axios.get(`movie/${id}?${API_KEY}`);
const getSimilarMovies = (id) => axios.get(`movie/${id}/similar?${API_KEY}&language=en-US`);
const getSearchMovies = (newQuery) => axios.get(`search/movie?${API_KEY}&language=en-US&query=${newQuery}&page=1`);

export {
  axios,
  getPopularMovies,
  getMovieByID,
  getSimilarMovies,
  getSearchMovies,
}

