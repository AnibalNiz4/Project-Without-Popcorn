import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import getMoviesDetails from "../../Services/getMoviesDetails";
import Banner from "../Banner/Banner";
import Nav from "../Nav/Nav";
import "./moviesDescriptions.scss";
import Reviews from "../Reviews/Reviews";
import InfoVideos from "../Videos/InfoVideos";
import Movies from "../Movies/Movies";
import genreMovies from "../../Services/genreMovies";
import getRecommendations from "../../Services/getRecommendations";

export default function MoviesDescriptions() {
  const { pathname, search } = useLocation();
  const id = new URLSearchParams(search).get("id");

  const [details, setDetails] = useState(null);
  const [review, setReview] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    if (id && pathname) {
      getMoviesDetails(`${pathname}/${id}/videos`).then((data) => {
        setDetails(data);
      });
      getMoviesDetails(`${pathname}/${id}/reviews`).then((data) => {
        setReview(data);
      });
      getRecommendations(`${pathname}/${id}/recommendations`).then((data) => {
        setRecommendations(data);
      });
      genreMovies().then((f) => {
        setGenre(f);
      });
    }
  }, [id, pathname]);

  return (
    <div className="descriptionsContainer">
      <div className="bannerHome">
        <Banner id={pathname + "/" + id} />
      </div>
      <div className="containerInfoDescrip">
        <div className="navCenter">
          <Nav />
        </div>
        <h1 className="videos">Videos</h1>
        <div className="trailers">
          {details && <InfoVideos details={details} />}
        </div>
        <h1 className="videos">Reviews</h1>
        <div className="reviews">{review && <Reviews review={review} />}</div>
        <h1 className="videos">Recommendations</h1>
        <div className="recommendations">
          {recommendations.map((boe) => (
            <Movies
              key={boe.id}
              id={boe.id}
              original_title={boe.original_title}
              poster_path={boe.poster_path}
              vote_average={boe.vote_average}
              overview={boe.overview}
              genre_ids={boe.genre_ids}
              genres={genre}
              info={`${pathname}?id=${boe.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
