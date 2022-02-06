import React, { useState } from "react";
import movieData from "../assets/api/movieData";
import MovieList from "./MovieList";
import "./style.css";

export default function Movie() {
  const [movies, setMovies] = useState(movieData);

  const removeItem = (id) => {
    setMovies(movies.filter((movie) => movie.no !== id));
  };

  return (
    <div className="wrap">
      <MovieList movies={movies} removeItem={removeItem} />
    </div>
  );
}
