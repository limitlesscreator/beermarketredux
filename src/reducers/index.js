import {combineReducers} from 'redux'
import {beerReducer} from "./reducer";


export const rootReducer = combineReducers({
    beers: beerReducer
})