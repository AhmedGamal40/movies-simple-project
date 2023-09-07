import React from 'react'
import CardMovies from './CardMovies'
import { Row } from 'react-bootstrap'
import Pagination from './Pagination'

export default function MovieList({movies ,getPage,pageCountet }) {
  return (
    <Row className='mt-3'>
      {
        movies.length >=1 ? (
          movies.map(movie => (
            <CardMovies key={movie.id} movie={movie} />
          ))
        ) : <h1 className='text-center p-5'>No movies found...</h1>
      }
      {
        movies.length >=1 ? (
          <Pagination getPage={getPage} pageCountet={pageCountet}/>
        ) : null
      }
    </Row>
  )
}
