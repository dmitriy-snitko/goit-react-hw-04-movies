import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import { getMoviesBiKeyword } from '../../services/api';
import MovieList from '../MovieList/MovieList';
import Container from '../Container/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const history = useHistory();
  const noResults = searchQuery =>
    toast.info(`No results were found for ${searchQuery}`);
  const emptyQuery = () => toast.info('Enter the title of the movie.');

  const searchQuery = new URLSearchParams(location.search).get('query');

  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.query.value.trim();
    e.target.elements.query.value = null;

    if (!query) {
      setMovies([]);
      emptyQuery();
    }

    history.push({ ...location, search: `query=${query}` });
  };

  useEffect(() => {
    if (!searchQuery) {
      setMovies([]);
      return;
    }

    getMoviesBiKeyword(searchQuery)
      .then(results => {
        if (results.length === 0) {
          setMovies([]);
          noResults(searchQuery);
          return;
        }

        setMovies(results);
      })
      .catch(error => console.error(error.message));
  }, [searchQuery]);

  return (
    <Container>
      <SearchForm onSubmit={handleSubmit} />

      {movies && <MovieList movies={movies} />}
      <ToastContainer />
    </Container>
  );
}
