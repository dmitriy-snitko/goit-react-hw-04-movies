import axios from 'axios';

const API_KEY = 'ec2decab2c803075323649cd6bc24f80';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = () =>
  axios(`/trending/movie/day?api_key=${API_KEY}`).then(
    ({ data }) => data.results,
  );

export const getMovieById = movieId =>
  axios(`/movie/${movieId}?api_key=${API_KEY}`).then(({ data }) => data);

export const getMoviesBiKeyword = searchQuery =>
  axios(`/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1`).then(
    ({ data }) => data.results,
  );

export const getMovieCast = movieId =>
  axios(`/movie/${movieId}/credits?api_key=${API_KEY}`).then(
    ({ data }) => data.cast,
  );

export const getMovieReviews = movieId =>
  axios(`/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`).then(
    ({ data }) => data.results,
  );
