import {
  Link,
  NavLink,
  Route,
  useRouteMatch,
  useLocation,
} from 'react-router-dom';

import s from './MovieDetails.module.css';
import { lazy, Suspense } from 'react';
import Container from '../Container/Container.jsx';
import Section from '../Section/Section.jsx';
import { Spiner } from '../Spiner/Spiner';
import noImage from '../../images/noImage.jpg';

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
    <>
      <Section>
        <Container>
          <Link to={location?.state?.from ?? '/'} className={s.go_back}>
            Go back
          </Link>
          <div className={s.movie_container}>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                alt=""
                className={s.poster}
              />
            ) : (
              <img src={noImage} alt="" className={s.poster} />
            )}

            <div className={s.description}>
              <h2 className={s.title}>{movie.title}</h2>
              <p className={s.text}>User Score: {movie.vote_average * 10}%</p>
              <h3 className={s.overview}>Overview</h3>
              <p className={s.text}>{movie.overview}</p>
              <h4 className={s.genres}>Genres</h4>
              <p className={s.text}>
                {movie.genres.map(genre => genre.name).join(', ')}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h4 className={s.title}>Additional information</h4>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/cast`,
                  state: { from: location?.state?.from ?? '/' },
                }}
                className={s.link}
                activeClassName={s.activeLink}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${url}/reviews`,
                  state: { from: location?.state?.from ?? '/' },
                }}
                className={s.link}
                activeClassName={s.activeLink}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </Container>
      </Section>

      <Suspense fallback={<Spiner />}>
        <Route path={`${path}/cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route path={`${path}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Suspense>
    </>
  );
}
