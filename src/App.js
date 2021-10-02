import ListOfMovies from './Components/ListOfMovies/ListOfMovies';
import { Route, Link } from 'wouter';
import './app.scss';
import MoviesDescriptions from './Components/MoviesDescriptions/MoviesDescriptions';
import ScrollToTop from './Components/ScrollToTop';
import MoviesSections from './Components/Movies/MoviesSection';
import TvShowsSection from './Components/Movies/TvShowsSection';
import Login from './Components/Login/Login';

function App() {

  return (
    <div className="App">
      <Route component={MoviesDescriptions} path='/movie/:movieId'>
        {ScrollToTop()}
      </Route>
      <Route component={MoviesDescriptions} path='/tv/:tvId'>
        {ScrollToTop()}
      </Route>
      {/* <Route
        component={Banner}
        path='/'
      /> */}
      <Route component={ListOfMovies} path='/'>
        {ScrollToTop()}
      </Route>
      <Route
        component={MoviesSections}
        path='/movies'
      />
      <Route
        component={TvShowsSection}
        path='/tv'
      />
      <Route
        component={Login}
        path='/login'
      />
    </div>
  );
}

export default App;
