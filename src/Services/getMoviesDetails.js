export default function getMoviesDetails(data) {

    //console.log(data)
    const apiKey = 'd83df78bddd5d4553fbf5d34015d74bb';

    return(
        fetch(`https://api.themoviedb.org/3${data}?api_key=${apiKey}&language=en-US`)
        .then(res => res.json())
        .then(details => {
            //console.log(details)
            return details;
        })
    )
}