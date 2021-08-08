import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../../services/api';
import MovieDetails from '../MovieDetails/MovieDetails';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  return <>{movie && <MovieDetails movie={movie} movieId={movieId} />}</>;
}
