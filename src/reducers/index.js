import {combineReducers} from 'redux'
import {authorizationReducer, basketReducer, beerReducer, errorReducer} from "./reducer";


export const rootReducer = combineReducers({
    beers: beerReducer,
    error: errorReducer,
    authorization: authorizationReducer,
    basket: basketReducer
})