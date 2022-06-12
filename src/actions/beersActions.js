//Action Creator
import {useDispatch} from "react-redux";
import {BASE_API_URL, ERROR_API_URL} from "../constants";

export const fetchBeers = () => async (dispatch) => {
    let error = Math.round(Math.random() * (3 - 1) + 1) === 3 // шансы 1 к 3, что нам придёт ошибка с сервера) запрос на не существующий Url
    let allBeers

    try {
        allBeers = await (error ? fetch(ERROR_API_URL()) : fetch(BASE_API_URL()))
        const res = await allBeers.json()

        let tempValueOfStuff = []
        res.forEach(el => tempValueOfStuff.push({
            id: el.id,
            valueOfStuff: +el.name.length % 6 === 0 ? 0 : Number(el.name.length) * 2
        }))

        dispatch({
            type: 'ADD_VALUE_STUFF',
            payload: {...tempValueOfStuff}
        })

        dispatch({
            type: 'FETCH_BEERS',
            payload: {
                beers: res
            }
        })

    } catch (e) {
        console.log(`Произошла ошибка: ${e}`)
        dispatch({type: 'SET_FETCHING_BEERS_ERROR', payload: true})
    }

}
