import Movies from "./../Movies/Movies";
import React, { useEffect, useState } from 'react';
import getMovies from './../../Services/getMovies';
import './listOfMovies.scss';
import genreMovies from "./../../Services/genreMovies";
import Banner from "../Banner/Banner";
import Nav from "../Nav/Nav";
import getTvShow from "../../Services/getTvShow";
import PupularTopRated from "../Polular/top_rated/Popular";

export default function ListOfMovies() {

    const [movie, setMovies] = useState([]);
    const [tv, setTv] = useState([]);
    const [pag, changePag] = useState(1);
    const [genre, setGenre] = useState([]);
    const [numInt, setNumInt] = useState('');

    useEffect(function () {
        getMovies({pag}).then(boe => setMovies(boe));
        genreMovies().then(f => setGenre(f))
        getTvShow({pag}).then(a => setTv(a));

        const numRand = Math.random() * 20;
        const nInt = Math.floor(numRand);

        setNumInt(nInt);
    }, []);

    if(movie[numInt] == undefined){
        return null;
    }

    return(
        <div className='containerAllPage'>
            <div className='navCenter'>
                {
                    <Nav/>
                }
            </div>
            {
                <div className='bannerHome'><Banner id={'/movie/' + movie[numInt].id}/></div>
            }
            <div className='movies_Tv_Popular'>
                <div>
                    <h1 className='popularMovies'>Popular Movies</h1>
                    <div className='containerMoviesGrid'>
                        {
                            movie.map(boe =>
                                <Movies 
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
                    <h1 className='popularMovies'>Popular Tv Shows</h1>
                    <div className='containerMoviesGrid'>
                        {
                            tv.map(boe =>
                                <Movies 
                                key={boe.id}
                                id={boe.id}
                                original_title={boe.original_title}
                                poster_path={boe.poster_path}
                                vote_average={boe.vote_average}
                                overview={boe.overview}
                                genre_ids={boe.genre_ids}
                                genres={genre}
                                info='/tv/'
                                />
                            )
                        }
                    </div>
                </div>
                <div className='PopularTop'>
                    {
                        <PupularTopRated/>
                    }
                </div>
            </div>
        </div> 
    )
}