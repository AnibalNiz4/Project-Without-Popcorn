import Nav from '../Nav/Nav';
import './moviesSection.scss';
import getTvShow from '../../Services/getTvShow';
import genreMovies from '../../Services/genreMovies';
import { useState, useEffect } from 'react';
import Movies from './Movies';

export default function TvShowsSection() {

    const [tv, setTv] = useState([]);
    const [pag, changePag] = useState(1);
    const [genre, setGenre] = useState([]);

    useEffect(function () {
        getTvShow({pag}).then(a => setTv(a));
        genreMovies().then(f => setGenre(f))
    }, [pag])

    const previousPage = () =>{
        if(pag > 1){
            changePag(pag - 1);
        }
    }

    const nextPage = () =>{
        changePag(pag + 1);
    }

    const handleSubmit = evt => {
        evt.preventDefault()
    }


    return(
        
        <div className='containerMoviesSection'>
            <Nav/>
            <h1 className='moviesTitle'>
                Tv Shows
            </h1>
            <div className='moviesSection'>
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
            <form onSubmit={handleSubmit} className='buttonsMoviesSection'>
                <button onClick={previousPage} className='buttonMovie'>Previous Movies</button>
                <button onClick={nextPage} className='buttonMovie'>Next Movies</button>
            </form>
        </div>
    )
}