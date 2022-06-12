import React from 'react';
import s from './Basket.module.css'
import {useDispatch, useSelector} from "react-redux";

export const Basket = () => {

    const {beers} = useSelector(state => state.beers)
    const {addToBasket,basket,costBasket} = useSelector(state => state.basket)

    const dispatch = useDispatch()

    const deleteHandler = (id) => {
        dispatch({type: 'DELETE_BASKET_STUFF', payload: id})
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
                    <th>id</th>
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Кол-во</th>
                    <th>сумма</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {basket.map(el => {
                    return (
                        <tr key={el[1].id}>
                            <td>{el[1].id}</td>
                            <td>{el[1].name}</td>
                            <td>{el[1].price}</td>
                            <td>
                                <button onClick={() => minusHandlerStuff(el[1].id)}>-</button>
                                {el[1].valueOfStuff}
                                <button onClick={() => plusHandlerStuff(el[1].id)}>+</button>
                            </td>
                            <td>{el[1].totalPrice}</td>
                            <td>
                                <button onClick={() => deleteHandler(el[1].id)}>delete</button>
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
