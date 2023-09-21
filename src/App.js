import { Container } from "react-bootstrap";
import MovieList from "./components/MovieList";
import Header from "./components/Header";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {



    
  return (
    <div className="font color-body">
      <Header />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieList/>}/>
            <Route path="/details/:id" element={<MovieDetails/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
