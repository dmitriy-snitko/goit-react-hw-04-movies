import { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { getTrendingMovies } from '../../services/api';
import MovieList from '../MovieList/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const { isExact } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    if (!isExact) {
      history.push('/');
    }

    getTrendingMovies().then(setMovies);
  }, [history, isExact]);

  return <MovieList movies={movies} />;
}
