import React from 'react';
import '../Movie/Movie.css'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movie = ({ poster, id }) => {
  const imgSrc = `http://image.tmdb.org/t/p/w185//${poster}`
  return (
    <Link to={`/${id}`} key={id} className='movie'>
        <img src={imgSrc} alt="movie poster"/>
    </Link>
  )
}

Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Movie;