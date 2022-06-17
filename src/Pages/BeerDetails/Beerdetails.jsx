import React, {useEffect, useRef, useState} from 'react';
import {useLocation} from "react-router";
import s from "./Beerdetails.module.css";
import price from '../../Img/priceForBeer.png'
import {useDispatch, useSelector} from "react-redux";
import {fetchBeers} from "../../actions/beersActions";

export const Beerdetails = () => {
    const dispatch = useDispatch()
    const {beers, heightPicture} = useSelector(state => state.beers)
    const {userLogged} = useSelector(state => state.authorization)
    const {addToBasket} = useSelector(state => state.basket)
    const {errorCount} = useSelector(state => state.error)
    const isEmptyBeers = Object.keys(beers).length > 0
    const location = useLocation()
    const tempId = location.pathname.split('-').reverse()[0]
    let valueOfStuffShort = isEmptyBeers ? beers[tempId - 1]?.valueOfStuff : null


    let imgRef = useRef()
    //
    useEffect(() => {
        dispatch({type: 'SET_HEIGHT_PICTURE', payload: imgRef.current?.height})
    },[])



    const onChangeHandler = (e) => {
        let temp = e.target.value
        console.log(e.target.value)
        if (temp == '-') {
            return
        }
        if (temp > (valueOfStuffShort)) {
            dispatch({type: 'SET_ERROR_COUNT', payload: true})
            return
        } else {
            dispatch({type: 'SET_ERROR_COUNT', payload: false})
            dispatch({type: 'SET_ADD_TO_BASKET', payload: temp})
        }
    }

    const onClickHandler = () => {
        dispatch({type: 'SET_SIZE_BASKET', payload: Number(addToBasket)})
        dispatch({type: 'SET_COST_BASKET', payload: beers[tempId - 1]?.price * Number(addToBasket)})
        dispatch({
            type: 'ADD_TO_BASKET',
            payload: {
                id: +tempId,
                name: beers[tempId - 1]?.name,
                price: +beers[tempId - 1]?.price,
                totalPrice: +beers[tempId - 1]?.price * addToBasket,
                valueOfStuff: addToBasket
            }
        })

        dispatch({type: 'CHANGE_VALUE_STUFF', payload: {id: tempId - 1, value: addToBasket}})

        if (valueOfStuffShort - addToBasket < addToBasket) { // решает задачу того, что нельзя добавить (14) товара в корзину, если осталось меньше
            dispatch({type: 'SET_ADD_TO_BASKET', payload: +beers[tempId - 1].valueOfStuff})
        }
    }

    useEffect(() => { // если пользователь вставит ссылку в браузере самостоятельно, то произойдёт запрос данных
        if (!isEmptyBeers) {
            dispatch(fetchBeers())
        }
        return () => {
            // componentWillUnmount events

            dispatch({type: 'SET_ADD_TO_BASKET', payload: 1}) // решает багу, если набрать 70 пива в одной вкладке, а потом переключиться на другую, то там значение добавления в карзину снова будет 1:)
        }
    }, [])


    return (
        <div className={s.main}>
            <div className={s.firstPart}>
                {heightPicture > 350 ?
                    <img className={s.currentBeerSecond} src={beers[tempId - 1]?.image_url} alt=""/> : ''}
                <img className={heightPicture > 350 || heightPicture === 0 ? s.currentBeer : s.littleBeer}
                     src={beers[tempId - 1]?.image_url} ref={imgRef} alt=""/>
            </div>

            <div className={heightPicture > 350 || heightPicture === 0 ? s.secondPartBigBeer : s.secondPartLittleBeer}>
                <img className={s.priceBeerPic} src={price} alt=""/>

                <div className={s.beerName}>{beers[tempId - 1]?.name?.split(' ').slice(0, 2).join(' ')}</div>

                <div className={s.priceBeer}>
                    {beers[tempId - 1]?.price} ₽
                </div>

                <div className={s.description}>
                    {beers[tempId - 1]?.description}
                </div>

                {valueOfStuffShort === 0 || !userLogged ? '' : <div className={s.valueStuff}>Наличие: <span
                    className={s.countValueStuff}>{valueOfStuffShort}</span></div>}

                {userLogged ?
                    <div>{valueOfStuffShort >= 1 ?
                        <div className={s.busketCounter}>
                            {errorCount ? <div className={s.dontCheating}>Не хитри, в наличии
                                только {valueOfStuffShort} :)</div> : ''}
                            <button onClick={onClickHandler} className={s.busket}>Добавить в корзину</button>
                            <input className={s.input} value={addToBasket} type="number" min={1} max={valueOfStuffShort}
                                   onChange={onChangeHandler}/>
                        </div> :
                        <div className={s.emptyStuff}>Нету в наличии</div>}
                    </div> : <div className={s.addStuff}>Чтобы добавить товар в корзину залогинтесь</div>}
            </div>
        </div>
    );
};
