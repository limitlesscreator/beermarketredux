import React from 'react';
import s from './Basket.module.css'
import {useDispatch, useSelector} from "react-redux";

export const Basket = () => {

    const {beers} = useSelector(state => state.beers)
    const {addToBasket,basket,costBasket} = useSelector(state => state.basket)

    const dispatch = useDispatch()

    const deleteHandler = (id) => {
        console.log(id)
        console.log(basket)
        const ourBeerInBasket = basket.find(el => el[1].id === id)
        const prevValueOfStuff = ourBeerInBasket[1].valueOfStuff


        dispatch({type: 'DELETE_BASKET_STUFF', payload: id})
        dispatch({type: 'CHANGE_VALUE_STUFF', payload: {id: id - 1, value: -(+prevValueOfStuff)}})
    }

    const minusHandlerStuff = (id) => {
        let currElement = basket.find(el => el[0] === id)

        dispatch({type: 'SET_SIZE_BASKET', payload: Number(-1)})
        dispatch({type: 'SET_COST_BASKET', payload: -(beers[id - 1]?.price)})
        dispatch({type: 'ADD_TO_BASKET',
            payload: {
                id: id,
                name: beers[id - 1]?.name,
                price: +beers[id - 1]?.price,
                totalPrice: +beers[id - 1]?.price * addToBasket,
                valueOfStuff: -1
            }
        })
        dispatch({type: 'CHANGE_VALUE_STUFF', payload: {id: id - 1, value: -1}})

        if (currElement[1].valueOfStuff === 0) {
            deleteHandler(id)
        }
    }

    const plusHandlerStuff = (id) => {
        if (beers[id - 1].valueOfStuff === 0) {
            return
        }

        dispatch({type: 'SET_SIZE_BASKET', payload: Number(1)})
        dispatch({type: 'SET_COST_BASKET', payload: (beers[id - 1]?.price)})
        dispatch({type: 'ADD_TO_BASKET',
            payload: {
                id: id,
                name: beers[id - 1]?.name,
                price: +beers[id - 1]?.price,
                totalPrice: +beers[id - 1]?.price * addToBasket,
                valueOfStuff: 1
            }
        })
        dispatch({type: 'CHANGE_VALUE_STUFF', payload: {id: id - 1, value: 1}})


    }


    return (
        <div className={s.main}>
            <table className={s.purpleHorizon}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>COST</th>
                    <th>VALUE</th>
                    <th>SUM</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {basket.map(el => {
                    return (
                        <tr key={el[1].id}>
                            <td>{el[1].id}</td>
                            <td className={s.tdName}>{el[1].name}</td>
                            <td>{el[1].price}</td>
                            <td className={s.valueStuffBlock}>
                                <button className={s.button} onClick={() => minusHandlerStuff(el[1].id)}>-</button>
                                <span className={s.valueStuff}>{el[1].valueOfStuff}</span>
                                <button className={s.button} onClick={() => plusHandlerStuff(el[1].id)}>+</button>
                            </td>
                            <td>{el[1].totalPrice}</td>
                            <td>
                                <button className={s.buttonDelete} onClick={() => deleteHandler(el[1].id)}>delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <div className={s.totalPrice}>{costBasket} ₽</div>
        </div>
    );
};
