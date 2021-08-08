import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import './App.css';

const HomePage = lazy(() =>
  import('./components/vievs/HomePage.js' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import(
    './components/vievs/MoviesPage.js' /* webpackChunkName: "movies-page" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/vievs/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */
  ),
);

const App = () => (
  <div className="app">
    <AppBar />

    <Suspense fallback={'load '}>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route>
          <HomePage />
        </Route>
      </Switch>
    </Suspense>
  </div>
);

export default App;
