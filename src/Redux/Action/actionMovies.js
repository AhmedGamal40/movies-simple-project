import axios from "axios";
import { ALLMOVIES , movieAPI} from "../Types/moviseType";


export const getAllMovies = () => {

    return async (dispatch)=> {

       const res = await  axios.get(movieAPI)
       dispatch({type:ALLMOVIES , data:res.data.results , pages:res.data.total_pages})
    }
}

export const getAllMovieSearch = (word) => {

    return async (dispatch)=> {

       const res = await  axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=903f60096bf3518e30136114a9a4e82a`)
       dispatch({type:ALLMOVIES , data:res.data.results , pages:res.data.total_pages})
    }
}

export const getAllMoviePage = (page) => {

    return async (dispatch)=> {

       const res = await  axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=903f60096bf3518e30136114a9a4e82a&page=${page}`)
       dispatch({type:ALLMOVIES , data:res.data.results , pages:res.data.total_pages})
    }
}