import getMoviesDetails from "../../Services/getMoviesDetails";
import getMovies from "../../Services/getMovies";
import { useEffect, useState } from "react";
import "./banner.scss";
import genreMovies from "../../Services/genreMovies";
import { useLocation ,Link } from "react-router-dom";

export default function Banner({ id }) {
  const { search } = useLocation();
  const idLocal = search.substr(4);
  let buttonBanner = id.substr(7);
  let newId;

  if(id[1] === 'm'){
    newId = '/movie/' + idLocal;
  }
  else if(id[1] === 't'){
    newId = '/tv/' + idLocal;
  }

  const [banner, setBanner] = useState([]);
  const [genresMovies, setGenres] = useState([]);

  useEffect(() => {
    if (id) {
      getMoviesDetails(id).then((data) => setBanner(data));
      genreMovies().then((data) => setGenres(data));
    } else {
      getMovies(1).then((data) => setBanner(data));
    }
  }, [id]);

  const genres = banner.genres;

  let button;

  if (newId == id) {
    button = "";
  } else {
    button = <p className="moreInfoBanner">More info</p>;
  }

  if (!genres) {
    return null;
  }

  return (
    <div className="banner_Container">
      <div className="div_Img">
        <img
          className="background_banner"
          src={"https://image.tmdb.org/t/p/original/" + banner.backdrop_path}
          title=""
        />
      </div>
      <div className="text_Banner">
        <h2 className="title_Banner">{banner.original_title || banner.original_name}</h2>
        <h4 className="tagline_Banner">{banner.tagline}</h4>
        <div className="genres_Banner">
          {genres.map((f) =>
            genresMovies.map((a) => {
              if (a.id === f.id) {
                return <p key={id}>{a.name}</p>;
              }
            })
          )}
        </div>
        <p className="overview_Banner">{banner.overview}</p>
        <p className="vote_Banner">
          Rating: <span className="span_Vote">{banner.vote_average} </span>
        </p>
        <Link to={'/movie?id=' + buttonBanner}>{button}</Link>
      </div>
    </div>
  );
}
