import { Container } from "react-bootstrap";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  // save data by useState
  const [movies , setMovise] = useState([]);
 // save pages 
 const [pageCountet, setPageCount] = useState(0);
  // get data by API 
  const getData = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=903f60096bf3518e30136114a9a4e82a")
    setMovise(res.data.results);
    console.log(res.data.total_pages);
    setPageCount(res.data.total_pages);
  }

// selected pade by API 
const getPage = async (page) => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=903f60096bf3518e30136114a9a4e82a&page=${page}`)
  setMovise(res.data.results);
  setPageCount(res.data.total_pages);
  
}

  // run data when start page
  useEffect(() => {
    getData();
  }, []);

    // Search data by API 
    const search = async (word) => {
      if(word === ""){
        getData();
      }else{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=903f60096bf3518e30136114a9a4e82a`)
        setMovise(res.data.results);
        setPageCount(res.data.total_pages);
      }
      }
  return (
    <div className="font color-body">
      <Header search={search}/>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieList movies={movies} getPage={getPage} pageCountet={pageCountet}/>}/>
            <Route path="/details/:id" element={<MovieDetails/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
