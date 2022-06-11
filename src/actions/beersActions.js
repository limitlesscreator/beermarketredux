//Action Creator


import {useDispatch} from "react-redux";

export const fetchBeers = () => async (dispatch) => {
    const allBeers = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=12')
    const res = await allBeers.json()

    let tempValueOfStuff = []
    res.forEach(el => tempValueOfStuff.push({
        id: el.id,
        valueOfStuff: +el.name.length % 6 === 0 ? 0 : Number(el.name.length) * 2
    }))
    // setValueOfStuff(tempOfId)
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
}

// export const fetchBeerDetail = (id) => async (dispatch) => {
//     const currentBeer = await fetch(`https://api.punkapi.com/v2/beers/${id}`)
//     const res = await currentBeer.json()
//     dispatch({type: 'SET_CURRENT_BEER', payload: res[0]})
//
//     return Promise.resolve('all nice\'')
// }