import { useEffect, useState } from "react";
import getRecommendations from "../../../Services/getRecommendations";
import './popularTop.scss';
import genreMovies from "../../../Services/genreMovies";
import CardPopTop from "../../CardPopTop/CardPopTop";

export default function PupularTopRated() {
    
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        getRecommendations('/movie/upcoming').then(data => {
            setPopular(data);
        })
        getRecommendations('/movie/top_rated').then(data => {
            setTopRated(data);
        })
        genreMovies().then(f => setGenre(f))
    }, [])

    return(
        <div className='containerPopularTop'>
            <h3 className='tittlePopTop'>Next Movies</h3>
            <div className='popular'>
                {
                    popular.map(boe =>
                        <CardPopTop 
                        key={boe.id}
                        id={boe.id}
                        original_title={boe.original_title}
                        poster_path={boe.poster_path}
                        vote_average={boe.vote_average}
                        overview={boe.overview}
                        genre_ids={boe.genre_ids}
                        genres={genre}
                        info='/movie/'
                        />
                    )
                }
            </div>
            <h3 className='h3Second tittlePopTop'>Top Rated Movies</h3>
            <div className='topRated'>
                {
                    topRated.map(boe =>
                        <CardPopTop 
                        key={boe.id}
                        id={boe.id}
                        original_title={boe.original_title}
                        poster_path={boe.poster_path}
                        vote_average={boe.vote_average}
                        genre_ids={boe.genre_ids}
                        genres={genre}
                        info='/movie/'
                        />
                    )
                }
            </div>
        </div>
    )

}