import React, { useState } from 'react';
import movieList from '../assets/api/moviedata'
import './style.css'
import MovieList from './MovieList';

const Movie = () => {
    const [ data , setData ] = useState( movieList )

    const onDel = ( id )  => {
        // alert('삭제')
        setData( data.filter( item => item.no !== id ))
    }

    return (
        <div className="wrap">
             <MovieList data={data} onDel={onDel} />   
        </div>
    );
};

export default Movie;