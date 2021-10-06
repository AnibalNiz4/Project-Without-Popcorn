export default async function getMoviesDetails(data) {
  //console.log(data)
  const apiKey = "d83df78bddd5d4553fbf5d34015d74bb";

  const dataReturned = await fetch(
    `https://api.themoviedb.org/3${data}?api_key=${apiKey}&language=en-US`
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  return dataReturned;

  return null;
  //   return `https://api.themoviedb.org/3${data}?api_key=${apiKey}&language=en-US`
  //     .then((res) => res.json())
  //     .then((details) => {
  //       console.log("anda");
  //       return details;
  //     });
}
