import React, {useState} from 'react'
import movieData from '../assets/api/movieData';
import MovieList from './MovieList';
import './style.css';

export default function Movie() {
    const [movies, setMovies] = useState(movieData)

    const removeItem = (number)=> {
        setMovies(movies.filter(movie => movie.no !== number))
    }

    return (
        <div className='wrap'>
            <MovieList movies={movies} removeItem={removeItem}/>
        </div>
    )
}
