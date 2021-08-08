import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import { getMoviesBiKeyword } from '../../services/api';
import MovieList from '../MovieList/MovieList';

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const history = useHistory();

  const searchQuery = new URLSearchParams(location.search).get('query');

  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.query.value.trim();
    e.target.elements.query.value = null;

    if (!query) {
      setMovies([]);
    }

    history.push({ ...location, search: `query=${query}` });
  };

  useEffect(() => {
    if (!searchQuery) {
      setMovies([]);
      return;
    }

    getMoviesBiKeyword(searchQuery).then(setMovies);
  }, [searchQuery]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />

      {movies && <MovieList movies={movies} />}
    </>
  );
}
