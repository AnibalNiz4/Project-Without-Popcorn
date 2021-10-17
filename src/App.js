import ListOfMovies from "./Components/ListOfMovies/ListOfMovies";
import "./app.scss";
import MoviesDescriptions from "./Components/MoviesDescriptions/MoviesDescriptions";
import MoviesSections from "./Components/Movies/MoviesSection";
import TvShowsSection from "./Components/Movies/TvShowsSection";
import Login from "./Components/Login/Login";

import ScrollToTop from "./Components/ScrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route component={MoviesSections} path="/movies" />
          <Route component={TvShowsSection} path="/tvs" />
          <Route path="/movie" component={MoviesDescriptions} />
          <Route path="/tv" component={MoviesDescriptions} />
          <Route component={Login} path="/login" />
          <Route component={ListOfMovies} path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
