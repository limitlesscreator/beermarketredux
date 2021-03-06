const priceOfBeer = (value) => {
    let temp = String(Math.floor((value / 3) * 100)).slice(0, 2)
    let templateSecond = temp.padEnd(temp.length + 1, '9')
    return templateSecond
}

const fValueOfStuff = (obj) => {
    return +obj.name.length % 6 === 0 ? 0 : Number(obj.name.length) * 2
}


const initStateBeer = {
    beers: [],
    heightPicture: 0,
    currentBeer: {},
    popup: false,
}

const errorInitState = {
    errorCount: false,
    errorLogged: false,
    fetchingBeersError: false,
}

const authorizationInitState = {
    userLogged: true,
    userLogin: '',
    userPassword: '',
}

const basketInitState = {
    basket:[],
    addToBasket: 1,
    sizeBasket: 0,
    costBasket: 0,
}

export const beerReducer = (state = initStateBeer, action) => {
    switch (action.type) {
        case 'FETCH_BEERS':
            let beers = action.payload.beers
            beers.map(el => {
                el.price = priceOfBeer(el.abv) // Добавляю прайс конкретному пиву)
                el.valueOfStuff = fValueOfStuff(el) // Добавляю value наличие конкретному пиву
            })
            beers[0].valueOfStuff = 0 // просто сделал, что первое пиво не в наличии, второе крассивее открывается при клике))
            return {...state, beers: beers}

        case 'ADD_VALUE_STUFF':
            return {...state, valueOfStuff: action.payload}

        case 'SET_POPUP':
            return {...state, popup: action.payload}

        case 'SET_HEIGHT_PICTURE':{
            return {...state, heightPicture: action.payload}
        }

        case 'CHANGE_VALUE_STUFF':{
            let newBeers = state.beers
            newBeers[action.payload.id].valueOfStuff -= action.payload.value
            return {...state, beers: [...newBeers]}
        }

        default:
            return {...state}
    }
}

export const errorReducer = (state = errorInitState,action) => {
    switch(action.type){
        case 'SET_ERROR_LOGGED':{
            return {...state, errorLogged: action.payload}
        }
        case 'SET_ERROR_COUNT':{
            return {...state, errorCount: action.payload}
        }
        case 'SET_FETCHING_BEERS_ERROR':{
            return {...state, fetchingBeersError: action.payload}
        }

        default:
            return {...state}
    }
}

export const authorizationReducer  = (state = authorizationInitState,action) => {
    switch(action.type){
        case 'SET_USER_PASSWORD':{
            return {...state, userPassword: action.payload}
        }
        case 'SET_USER_LOGIN':{
            return {...state, userLogin: action.payload}
        }
        case 'SET_USER_LOGGED':
            return {...state, userLogged: action.payload}

        default:
            return {...state}
    }
}

export const basketReducer  = (state = basketInitState,action) => {
    switch(action.type){
        case 'SET_ADD_TO_BASKET':{
            return {...state, addToBasket: Number(action.payload)}
        }
        case 'SET_COST_BASKET':{
            return {...state, costBasket: state.costBasket + +action.payload}
        }
        case 'SET_SIZE_BASKET':{
            return {...state, sizeBasket: state.sizeBasket + action.payload}
        }
        case 'ADD_TO_BASKET':{
            let currentObj = action.payload
            let prevState = state.basket

            if (prevState.length > 0 && prevState.some(el => el[0] === currentObj.id )){
                prevState.map(el => {
                    if (currentObj.id === el[0]){
                        el[1].valueOfStuff += +currentObj.valueOfStuff
                        el[1].totalPrice += (+currentObj.price * +currentObj.valueOfStuff)
                    }
                })
                return {...state, basket: [...prevState]}
            }

            return {...state, basket: [...state.basket, [action.payload.id, action.payload]]}
        }
        case 'DELETE_BASKET_STUFF':{
            let newBeers = state.basket
            let deleteObj = state.basket.filter(el => el[0] === action.payload)
            // console.log(deleteObj)
            let stateWithoutDeleteObj = state.basket.filter(el => el[0] !== action.payload)

            //
            // console.log(newBeers)
            // console.log(action.payload)
            //
            //
            // console.log(deleteObj[0][1].valueOfStuff)


            // newBeers[action.payload].valueOfStuff += +deleteObj[0][1].valueOfStuff

            return {...state, basket: [...stateWithoutDeleteObj], costBasket: state.costBasket - (+deleteObj[0][1].totalPrice), sizeBasket: state.sizeBasket - +deleteObj[0][1].valueOfStuff}
        }
        default:
            return {...state}
    }
}