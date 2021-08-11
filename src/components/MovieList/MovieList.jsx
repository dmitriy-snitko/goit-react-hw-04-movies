import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';
import noPoster from '../../images/noImage.jpg';

const BASE_URL = 'https://image.tmdb.org/t/p/w185/';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
              className={s.link}
            >
              <div>
                {movie.poster_path ? (
                  <img
                    src={`${BASE_URL}${movie.poster_path}`}
                    alt={movie.original_title}
                    className={s.poster}
                  />
                ) : (
                  <img
                    src={noPoster}
                    alt={movie.original_title}
                    className={s.poster}
                  />
                )}

                <p>{movie.title}</p>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
}
