import React, { useState } from 'react';
import Modal from './Modal';
import dataList from '../assets/api/movie.json'
import MovieList from './MovieList';
import MovieView from './MovieView';
import './style.css' 

const Movies = () => {
    const [data , setData] = useState( dataList )
    const [ movie, setMovie ] = useState( data[0] )
    const [ isAcitive , setIsActive ] = useState( false )

    const onOver = ( id )  => {
        // setMovie( data[ id -1 ])
        setMovie( data.find( item => item.rank  === id ))
    }
    const onOpen = ()  => {
        setIsActive( true )
    }
    const onClose = ()  => {
        setIsActive( false )
    }

    return (
        <div className="gallery">
             <MovieView movie={movie} onOpen={onOpen} />
             <MovieList data={data} onOver={onOver} />
             {
                 isAcitive && <Modal  movie={movie}  onClose={onClose} 
                               setIsActive={setIsActive} />
             }
             
        </div>
    );
};

export default Movies;