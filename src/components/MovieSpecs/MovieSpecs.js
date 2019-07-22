import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../MovieSpecs/MovieSpecs.css'
import { connect } from 'react-redux';
import { favoriteMovie } from '../../api/apiCalls'; 

export class MovieSpecs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }
  }

  handleClick = () => {
    const { title, poster_path, overview, vote_average, release_date, user, id } = this.props;
    this.favoriteMovie({ movie_id: id, user_id: user.id, title, poster_path, release_date, vote_average, overview });
  }
  
  favoriteMovie = async (favoriteInfo) => {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(favoriteInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      
      const response = await fetch(`http://localhost:3000/api/users/favorites/new`, options)
      const result = await response.json()
      return result;
    } catch (error) {
      this.setState({ error: 'You need to log in to add favorites' })
    }
  }
  
  render() {
    const { title, backdrop_path, overview, vote_average, release_date, user} = this.props;
    const imgSrc = `http://image.tmdb.org/t/p/w1280//${backdrop_path}`
    return (
      <div className='container'>
        <h1 className='title'>{title}
          <span className='rating'> Rating : {vote_average} / 10 </span>
          <button onClick={() => this.handleClick()} className='btn'>
            Add to Favorites
          </button>
        </h1>
        <img src={imgSrc} alt="movie backdrop" className='back-drop'/>
        <p className='description'>{overview}</p>
        <p className='date'>Release Date: {release_date}</p>
        <h3>{this.state.error}</h3>
        <Link to={`/`}>
          <button className='back-btn'>
           ◀ back
          </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  user: store.login,
})

export default connect(mapStateToProps)(MovieSpecs);