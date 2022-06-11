const priceOfBeer = (value) => {
    let temp = String(Math.floor((value / 3) * 100)).slice(0, 2)
    let templateSecond = temp.padEnd(temp.length + 1, '9')
    return templateSecond
}

const fValueOfStuff = (obj) => {
    return +obj.name.length % 6 === 0 ? 0 : Number(obj.name.length) * 2
}


const initState = {
    userLogged: true,
    beers: [],
    basket:[],
    errorCount: false,
    addToBasket: 0,
    heightPicture: 0,
    // valueOfStuffOneBeer: 0,
    currentBeer: {},
    popup: false,
    sizeBasket: 0,
    costBasket: 0,
    value: 0
}


export const countReducer = (state = initState, action) => {
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
        case 'SET_USER_LOGGED':
            return {...state, userLogged: action.payload}
        case 'SET_POPUP':
            return {...state, popup: action.payload}
        case 'SET_ERROR_COUNT':{
            return {...state, errorCount: action.payload}
        }
        case 'SET_ADD_TO_BASKET':{
            return {...state, addToBasket: action.payload}
        }
        case 'SET_HEIGHT_PICTURE':{
            return {...state, heightPicture: action.payload}
        }
        case 'ADD_TO_BASKET':{
            // организовать хранение объектов товаров по id, и если Id совпадают, то меняем общуую сумму и общее кол-во товара !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1!!!!!!!!!!!!!!!!!!!!!!!111
            let tempId = Object.keys(action.payload.id)
            console.log(tempId)
            return {...state, basket: [...state.basket, {[action.payload.id]: action.payload}]}
        }
        // case 'ADD_VALUE':
        //     return {...state, value: state.value + 1}
        // case 'ADD_PRICE_BEER':
        //     return {...state, priceOfBeer: [...state.priceOfBeer, action.payload.id = action.payload.price ]}
        default:
            return {...state}
    }
}