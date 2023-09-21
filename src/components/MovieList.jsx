import React from 'react'
import CardMovies from './CardMovies'
import { Row } from 'react-bootstrap'
import Pagination from './Pagination'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllMovies} from "../Redux/Action/actionMovies"


export default function MovieList({ getPage,pageCountet }) {
  const despatch = useDispatch()

  // run data when start page
  useEffect(() => {
    despatch(getAllMovies())
  }, []);

  // save data by useState
  const [movies , setMovise] = useState([]);

  // get data by API 
const dataMovies = useSelector((state) => state.movies)
useEffect(()=>{
  setMovise(dataMovies)

},[dataMovies])
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
