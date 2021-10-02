import getMoviesDetails from "../../Services/getMoviesDetails";
import getMovies from "../../Services/getMovies";
import { useEffect, useState } from "react";
import './banner.scss';
import genreMovies from "../../Services/genreMovies";
import { Route, Link } from 'wouter';
import { useLocation } from "wouter";

export default function Banner({id}) {

    const idLocal = useLocation()[0];

    const [banner, setBanner] = useState([]);
    const [genresMovies, setGenres] = useState([]);

    useEffect(() => {
        if(id){
            getMoviesDetails(id).then(data => setBanner(data));
            genreMovies().then(data => setGenres(data));
        }
        else{
            getMovies().then(data => setBanner(data));
        }
    }, [id]);

    const genres = banner.genres;
    
    let button;

    if(idLocal == id){
        button = '';
    }
    else{
        button = <p className='moreInfoBanner'>More info</p>;
    }

    if(!genres){
        return null
    }
    // console.log(banner)
    // console.log(genresMovies);

    return(
        <div className='banner_Container'>
            <div className='div_Img'>
                <img className='background_banner' src={'https://image.tmdb.org/t/p/original/' + banner.backdrop_path} title=''/>
            </div>
            <div className='text_Banner'>
                <h2 className='title_Banner'>
                    {banner.original_title}
                </h2>
                <h4 className='tagline_Banner'>{banner.tagline}</h4>
                <div className='genres_Banner'>
                    {
                        genres.map(f =>  genresMovies.map(a => {if(a.id === f.id){return <p key={id} >{a.name}</p>}}))
                    }
                </div>
                <p className='overview_Banner'>
                    {banner.overview}
                </p>
                <p className='vote_Banner'>
                    Rating: <span className='span_Vote'>{banner.vote_average} </span>
                </p>
                <Link to={id}>
                    {button}
                </Link>
            </div>
        </div>
    )
}