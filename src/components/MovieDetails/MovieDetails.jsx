import {
  Link,
  NavLink,
  Route,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Cast = lazy(() =>
  import('../vievs/Cast.js' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('../vievs/Reviews.js' /* webpackChunkName: "reviews" */),
);

export default function MovieDetails({ movie, movieId }) {
  const { url, path } = useRouteMatch();
  const location = useLocation();

  return (
    <div>
      <Link to={location?.state?.from ?? '/'}>go back</Link>
      <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" />
      <h2>{movie.title}</h2>
      <p>User Score: {movie.vote_average * 10}%</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h4>Genres</h4>
      <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
      <hr />
      <ul>
        <li>
          <NavLink to={`${url}/cast`}>Cast</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reviews`}>Reviews</NavLink>
        </li>
      </ul>
      <hr />

      <Suspense fallback={'Load'}>
        <Route path={`${path}/cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route path={`${path}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Suspense>
    </div>
  );
}
