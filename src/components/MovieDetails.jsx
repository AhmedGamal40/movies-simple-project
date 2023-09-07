import axios from 'axios';
import {React,  useEffect,  useState}  from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

export default function MovieDetails() {

    const params = useParams();
    const [movieDetails, setMovieDetails] = useState([])
    // get Details Movies
    const getMovieDetails = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=903f60096bf3518e30136114a9a4e82a&language=en`)
        setMovieDetails(res.data)
      }

      useEffect(()=>{
        getMovieDetails()
      } , [])
  return (
    <div>
    <Row>
    <Col md="6" xs="12" sm="12" className="mt-4 ">
            <div className="card-detalis  d-flex  justify-content-center">
                <img
                    className="img-movie"
                    src={`https://image.tmdb.org/t/p/w500/` + movieDetails.poster_path}
                    alt="ascad"
                    />
            </div>
        </Col>
        <Col md="6" xs="12" sm="12" className="mt-4 ">
        <div className="card-detalis  d-flex align-items-center ">
                <div className="justify-content-center text-center  mx-auto">
                    <h2 className="card-text-details border-bottom text-danger">
                        {movieDetails.title}
                    </h2>
                    <p className="card-text-details border-bottom text-success">
                        {movieDetails.release_date}
                    </p>
                    <p className="card-text-details border-bottom">
                        Vote Number :{movieDetails.vote_count}
                    </p>
                    <p className="card-text-details border-bottom text-warning">
                        Vote :{movieDetails.vote_average}
                    </p>
                </div>
        </div>
        </Col>
    </Row>

    <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
            <div className="card-story  d-flex flex-column align-items-start">
                <div className="text-start p-4 ">
                    <p className="card-text-title border-bottom">Description:</p>
                </div>
                <div className="text-start px-2">
                    <p className="card-text-story">{movieDetails.overview}</p>
                </div>
            </div>
        </Col>
    </Row>
    <Row className="justify-content-center m-1">
        <Col
            md="10"
            xs="12"
            sm="12"
            className="m-2 d-flex justify-content-center ">
            <Link to="/">
                <button
                    style={{ backgroundColor: "#b45b35", border: "none" }}
                    className="btn btn-primary mx-2">
                    Home 
                </button>
            </Link>
            <a href={movieDetails.homepage} >
                <button
                    style={{ backgroundColor: "#b45b35", border: "none" }}
                    className="btn btn-primary">
                    Watch
                </button>
            </a>
        </Col>
    </Row>
</div>
  )
}
