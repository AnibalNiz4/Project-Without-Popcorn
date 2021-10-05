import "./cardPopTop.scss";
import { Link } from "react-router-dom";

export default function CardPopTop({
  vote_average,
  original_title,
  poster_path,
  genre_ids,
  genres,
  id,
  info,
}) {
  return (
    <div className="cardContainerPopTop">
      <Link to={info + id}>
        <div className="CardPopTop">
          <img
            className="imgCardPopTop"
            src={"https://image.tmdb.org/t/p/original" + poster_path}
            alt=""
          />
        </div>
      </Link>
      <div className="hoverCardPopTop">
        <h5 className="namePopTop">{original_title}</h5>
        <span className="averagePopTop">{vote_average}</span>
        <div className="genresPopTop">
          {genre_ids.map((f) =>
            genres.map((a) => {
              if (a.id === f) {
                return <p key={id}>{a.name}</p>;
              }
            })
          )}
        </div>
      </div>
    </div>
  );
}
