import { useState, useEffect } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { getTrendingMovies } from '../../services/api';
import MovieList from '../MovieList/MovieList';
import Container from '../Container/Container';
import Section from '../Section/Section';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const { isExact } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    if (!isExact) {
      history.push('/');
    }

    getTrendingMovies()
      .then(setMovies)
      .catch(error => console.error(error.message));
  }, [history, isExact]);

  return (
    <Section>
      <Container>
        <MovieList movies={movies} />
      </Container>
    </Section>
  );
}
