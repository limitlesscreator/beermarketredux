const initState = {
    value: 0
}


export const countReducer = (state = initState, action) => {
    switch (action.type) {
        case 'PLUS':
            return {...state, value: state.value + 1}
        default:
            return {...state}
    }
}