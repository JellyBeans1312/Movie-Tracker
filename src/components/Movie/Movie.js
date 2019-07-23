import React from 'react';
import '../Movie/Movie.css'
import { Link } from 'react-router-dom';

const Movie = ({ poster, id }) => {
  const imgSrc = `http://image.tmdb.org/t/p/w185//${poster}`
  return (
    <Link to={`/${id}`} key={id} className='movie'>
        <img src={imgSrc} alt="movie poster"/>
    </Link>
  )
}

export default Movie;