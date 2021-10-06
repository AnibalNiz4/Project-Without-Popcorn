export default function InfoVideos(details) {
  return details.details.results.map((f) => {
    return (
      <div className="titleTrailers">
        <h2>{f.type}</h2>
        <p>{f.name}</p>
        <div className="iframe">
          <iframe
            className="videoInfo"
            id="6027d7fcb2681f003f2a35f8"
            frameBorder="0"
            allowFullScreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video player"
            height="360px"
            width="640px"
            src={`https://www.youtube.com/embed/${f.key}?autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fcinefan-b6f05.web.app&amp;widgetid=1`}
          ></iframe>
        </div>
      </div>
    );
  });
}
