const apiKey = 'd83df78bddd5d4553fbf5d34015d74bb';

export default function getMovies({pag = '1', data}){
    const api2 = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${pag}`

    return  fetch(api2)
        .then(res => res.json())
        .then(response => {
            const data = response.results;
            const movies = data.map(mov => {
                const { overview, vote_average, id, original_title, poster_path, genre_ids } = mov;
                return { overview, vote_average, id, original_title, poster_path, genre_ids };
            });
            return movies;
        });
}