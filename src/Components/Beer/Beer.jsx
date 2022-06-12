import React from 'react';
import s from './Beer.module.css'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";

export const Beer = (props) => {
    const dispatch = useDispatch()

    const {userLogged} = useSelector(state => state.authorization)


    const addToBasketOne = () => {
        dispatch({type: 'SET_COST_BASKET', payload: props.beer?.price})
        dispatch({type: 'SET_SIZE_BASKET', payload: 1})
        dispatch({type: 'ADD_TO_BASKET', payload: {id: props.id, name: props.beer?.name, price: props.beer.price, totalPrice: +props.beer.price, valueOfStuff: 1  }})
        dispatch({type: 'CHANGE_VALUE_STUFF', payload: {id: props.id - 1, value: 1}})
    }

    return (
        <div className={s.card}>
            <Link to={`beerDetails/beer-${props.id}`} onClick={() => {
            }} className={s.nameBeer}>{props.beer.name}</Link>

            <img src={props.beer.image_url} alt={props.beer.name}/>

            <div>
                <div className={s.priceBeer}>{props.beer?.price} ₽</div>
                {userLogged ?
                    <div>{props.valueOfStuff >= 1 ?
                        <button onClick={addToBasketOne} className={s.busket}>в корзину</button> :
                        <div>Нету в наличии</div>}</div> :
                    <div className={s.shouldLoggin}>Чтобы добавить товар в корзину залогинтесь</div>}
            </div>
        </div>
    );
};
