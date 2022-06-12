import React, {useContext} from 'react';
import s from './Beer.module.css'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {priceOfBeer} from "../../actions/beersActions";
import {useLocation} from "react-router";
// import {Context} from "../context";

export const Beer = (props) => {
    const dispatch = useDispatch()
    const location = useLocation()

    const beers = useSelector(state => state.beers.beers)
    const tempId = location.pathname.split('-').reverse()[0]
    // const priceOfBeer = (value) => {
    //     let temp = String(Math.floor((value / 3) * 100)).slice(0, 2)
    //     let templateSecond = temp.padEnd(temp.length + 1, '9')
    //
    //     // dispatch({type: 'ADD_PRICE_BEER', payload: {id: props.id, price: templateSecond}})
    //     return templateSecond
    // }

    const userLogged = useSelector(state => state.beers.userLogged)

    // const tempPrice = priceOfBeer(props.beer.abv)
    // const tempPrice = (props.beer.abv)

    // const {
    //     userLogged,
    //     setConstBasket,
    //     setSizeBasket,
    //     setValueOfStuff,
    //     valueOfStuff,
    //     setReloadData,
    //     beerDetails,
    //     priceOfBeer,
    // } = useContext(Context)

    // const tempPrice = priceOfBeer(props.beer.abv)
    //
    const addToBasketOne = () => {
        dispatch({type: 'SET_COST_BASKET', payload: props.beer?.price})
        dispatch({type: 'SET_SIZE_BASKET', payload: 1})
        dispatch({type: 'ADD_TO_BASKET', payload: {id: props.id, name: props.beer?.name, price: props.beer.price, totalPrice: +props.beer.price, valueOfStuff: 1  }})
        dispatch({type: 'CHANGE_VALUE_STUFF', payload: {id: props.id - 1, value: 1}})
    }

    return (
        <div className={s.card}>
            <Link to={`beerDetails/beer-${props.id}`} onClick={() => {
                // beerDetails(props.id)
                // setReloadData(false)
            }} className={s.nameBeer}>{props.beer.name}</Link>

            <img src={props.beer.image_url} alt={props.beer.name}/>

            <div>
                {/*<div className={s.priceBeer}>{tempPrice} ₽</div>*/}
                <div className={s.priceBeer}>{props.beer?.price} ₽</div>
                {userLogged ?
                    <div>{props.valueOfStuff >= 1 ?
                        <button onClick={addToBasketOne} className={s.busket}>в корзину</button> :
                        // <button  className={s.busket}>в корзину</button> :
                        <div>Нету в наличии</div>}</div> :
                    <div className={s.shouldLoggin}>Чтобы добавить товар в корзину залогинтесь</div>}
            </div>
        </div>
    );
};
