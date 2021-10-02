const apiKey = 'd83df78bddd5d4553fbf5d34015d74bb';

export default function getRecommendations(info){
    const api2 = `https://api.themoviedb.org/3${info}?api_key=${apiKey}&language=en-US&page=1`

    return (  
        fetch(api2)
        .then(res => res.json())
        .then(response => {
            const data = response.results;
            const recommendations = data.map(mov => {
                const { overview, vote_average, id, original_title, poster_path, genre_ids } = mov;
                return { overview, vote_average, id, original_title, poster_path, genre_ids };
            });
            return recommendations;
        })
    )
}