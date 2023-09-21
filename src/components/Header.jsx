import { Col, Container,  Row} from "react-bootstrap";
import logoImage  from "../Images/video-camera (1).png"
import { useDispatch } from "react-redux";
import {getAllMovies , getAllMovieSearch} from "../Redux/Action/actionMovies"



function Header(){
    const despatch = useDispatch()

    const onSearch = (word)=>{
        search(word)
    }
    // Search data by API 
    const search = async (word) => {
        if(word === ""){
            despatch(getAllMovies())
        }else{
            despatch(getAllMovieSearch(word))
        }
        }
    return(
            <div className="nav-style w-100">
                <Container >
                    <Row className="pt-2">
                        <Col xs="2" lg="1">
                            <a href="/">
                            <img className="logo" alt='fdf' src={logoImage}/>
                            </a>
                        </Col>
                        <Col xs="10" lg="11" className="d-flex align-items-center">
                            <div className="search w-100">
                                <input onChange={(e)=>onSearch(e.target.value)} type="text" placeholder="Search.." className="form-control"/>
                                <i className="fa fa-search"></i>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}

export default Header;