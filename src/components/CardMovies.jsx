import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function CardMovies({movie}) {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/details/${movie.id}`}>
        <div className="card">
          <img src={`https://image.tmdb.org/t/p/w500/`+movie.poster_path} className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <h3 className='text-danger'>{movie.title} </h3>
              <p className='text-success'>{movie.release_date}</p>
              <p>Vote Number: {movie.vote_count}</p>
              <p className='text-warning'>Vote :<strong>{movie.vote_average}</strong>  </p>
            </div>
          </div>
        </div>
      </Link>
    </Col >
  )
}
