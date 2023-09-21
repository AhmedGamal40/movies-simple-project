import { createStore , applyMiddleware} from "redux";
import {reducerMovies}  from '../Reducer/reducerMovies.js'
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";




export const store = createStore(reducerMovies , applyMiddleware(thunk))