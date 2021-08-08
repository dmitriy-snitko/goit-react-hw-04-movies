import { useState, useEffect } from 'react';
import { getMovieCast } from '../../services/api';
import CastList from '../CastList/CastList';

export default function Cast({ movieId }) {
  const [actors, setActors] = useState(null);

  useEffect(() => {
    getMovieCast(movieId).then(setActors);
  }, [movieId]);

  return <>{actors && <CastList actors={actors} />}</>;
}
