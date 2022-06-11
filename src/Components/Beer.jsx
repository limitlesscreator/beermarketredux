import React, {useContext} from 'react';
import s from './Beer.module.css'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {priceOfBeer} from "../actions/beersActions";
// import {Context} from "../context";

export const Beer = (props) => {
    const dispatch = useDispatch()

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
    // const addToBasketOne = () => {
    //     setValueOfStuff([...valueOfStuff, valueOfStuff[props.id].valueOfStuff -= 1])
    //     setSizeBasket((prev) => prev + 1)
    //     setConstBasket((prev) => prev + +tempPrice)
    // }

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
                        // <button onClick={addToBasketOne} className={s.busket}>в корзину</button> :
                        <button  className={s.busket}>в корзину</button> :
                        <div>Нету в наличии</div>}</div> :
                    <div className={s.shouldLoggin}>Чтобы добавить товар в корзину залогинтесь</div>}
            </div>
        </div>
    );
};
