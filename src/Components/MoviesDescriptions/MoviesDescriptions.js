import { useEffect, useState } from "react"
import { useParams } from "react-router";
import { URLSearchParams } from "whatwg-url";
import { useLocation } from "wouter";
import getMoviesDetails from "../../Services/getMoviesDetails";
import Banner from "../Banner/Banner";
import Nav from "../Nav/Nav";
import './moviesDescriptions.scss';
import Reviews from '../Reviews/Reviews';
import InfoVideos from '../Videos/InfoVideos';
import Movies from "../Movies/Movies";
import genreMovies from "../../Services/genreMovies";
import getRecommendations from "../../Services/getRecommendations";

export default function MoviesDescriptions() {

    const id = useLocation()[0];

    const [details, setDetails] = useState(null);
    const [review, setReview] = useState('');
    const [recommendations, setRecommendations] = useState([]);
    const [genre, setGenre] = useState([]);

    useEffect(() =>{
        getMoviesDetails(id+'/videos').then(data => {
            setDetails(data);
        })
        getMoviesDetails(`${id}/reviews`).then(data => {
            setReview(data);
        })
        getRecommendations(id +'/recommendations').then(data =>{
            setRecommendations(data);
        });
        genreMovies().then(f => {
            setGenre(f)
        })
    }, [id]);

    let info;

    if(id[1] == 'm'){
        info = '/movie/';
    }
    else if(id[1] == 't'){
        info = '/tv/';
    }

    if(!details){
        return null;
    }

    if(review == ''){
        return null;
    }

    return(
        <div className='descriptionsContainer'>
            <div className='bannerHome'>
                {
                    <Banner className='' id={id}/>
                } 
            </div>
            <div className='containerInfoDescrip'>
                <div className='navCenter'>
                    {
                        <Nav/>
                    }
                </div>
                <h1 className='videos'>Videos</h1>
                <div className='trailers'>
                    {   
                        <InfoVideos details={details} />
                    }
                </div>
                <h1 className='videos'>Reviews</h1>
                <div className='reviews'>
                    {
                        <Reviews review={review} />
                    }
                </div>
                <h1 className='videos'>Recommendations</h1>
                <div className='recommendations'>
                    {
                        recommendations.map(boe =>
                            <Movies 
                            key={boe.id}
                            id={boe.id}
                            original_title={boe.original_title}
                            poster_path={boe.poster_path}
                            vote_average={boe.vote_average}
                            overview={boe.overview}
                            genre_ids={boe.genre_ids}
                            genres={genre}
                            info={info}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}