const initState = {
    beers: [],
    value: 0
}


export const countReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_BEERS':
            return {...state, beers: action.payload.beers}
        case 'ADD_VALUE':
            return {...state, value: state.value + 1}
        default:
            return {...state}
    }
}