import React from 'react'
import MovieItem from './MovieItem'

export default function MovieList({movies, removeItem}) {
    return (
    <>
        {
        movies.map(movie => 
        <MovieItem key={movie.no} movie={movie} removeItem={removeItem}/>)
        }
    </>
    )
}
