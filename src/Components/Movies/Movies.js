import "./movies.scss";
import { Link } from "react-router-dom";

export default function Movies({
  overview,
  vote_average,
  original_title,
  poster_path,
  genre_ids,
  genres,
  id,
  info,
}) {
  return (
    <div className="cardContainer">
      <div className="movieCard">
        <img
          className="imgCard"
          src={"https://image.tmdb.org/t/p/original" + poster_path}
          alt=""
        />
        <h5 className="nameMovie">{original_title}</h5>
      </div>
      <Link to={info}>
        <div className="hoverCard">
          <h5 className="nameMovie">{original_title}</h5>
          <span className="averageMovie">{vote_average}</span>
          <p className="textMovie">{overview}</p>
          <div className="genresMovie">
            {genre_ids.map((f) =>
              genres.map((a) => {
                if (a.id === f) {
                  return <p key={id}>{a.name}</p>;
                }
              })
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
