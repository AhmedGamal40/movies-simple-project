import { ALLMOVIES } from "../Types/moviseType";

const initialValue = {movies: [] , pageCounter: 0}
export const reducerMovies = (state = initialValue , action) => {
    switch (action.type) {
        case ALLMOVIES:
            return { movies:action.data ,pageCounter:action.pages };
        default:
            return state;
    }
}
