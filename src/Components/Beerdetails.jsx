import React, {useContext, useEffect, useRef} from 'react';
import {useLocation} from "react-router";
import s from "./Beerdetails.module.css";
import price from '../Img/priceForBeer.png'
import {useDispatch, useSelector} from "react-redux";
import { fetchBeers} from "../actions/beersActions";
// import {Context} from "../context";

export const Beerdetails = () => {
    const dispatch = useDispatch()
    // const valueOfStuff = useSelector(state => state.beers.valueOfStuff)
    // const currentBeer = useSelector(state => state.beers.currentBeer)
    const userLogged = useSelector(state => state.beers.userLogged)
    const errorCount = useSelector(state => state.beers.errorCount)
    const beers = useSelector(state => state.beers.beers)
    const addToBasket = useSelector(state => state.beers.addToBasket)
    const heightPicture = useSelector(state => state.beers.heightPicture)

    const isEmptyBeers = Object.keys(beers).length > 0



    const location = useLocation()
    const tempId = location.pathname.split('-').reverse()[0]
    const valueOfStuffShort = isEmptyBeers ? beers[tempId - 1]?.valueOfStuff : null


    let imgRef = useRef()

    setTimeout(() => {
        dispatch({type: 'SET_HEIGHT_PICTURE', payload: imgRef.current?.height})
        // setHeightPicture(imgRef.current?.height)
    },400)

    const onChangeHandler = (e) => {
        let temp = e.target.value
        console.log(e.target.value)
        if (temp == '-'){
            console.log('boom')
            return
        }
        if (temp > (valueOfStuffShort)) {
            // setErrorCount(true)
            dispatch({type: 'SET_ERROR_COUNT', payload: true})
            return
        } else {
            // setErrorCount(false)
            dispatch({type: 'SET_ERROR_COUNT', payload: false})
            dispatch({type: 'SET_ADD_TO_BASKET', payload: temp})
            // setAddToBasket(temp)
        }
    }

    const onClickHandler = () => {
        dispatch({type: 'ADD_TO_BASKET', payload: {id: tempId, name: beers[tempId - 1]?.name, price: beers[tempId - 1]?.price}})

        // setValueOfStuff([...valueOfStuff, valueOfStuff[tempId].valueOfStuff -= addToBasket])
        // setSizeBasket((prev) => prev + +addToBasket)
        // setConstBasket((prev) => prev + (priceOfBeer(currentBeer.abv) * addToBasket))
        // setErrorCount(false)

        // if (valueOfStuffShort - addToBasket < addToBasket){ // решает задачу того, что нельзя добавить (14) товара в корзину, если осталось меньше
        //     setAddToBasket(valueOfStuff[tempId].valueOfStuff) // тут не вставляется локальная переменная valueOfStuff уже получится бага почему-то))
        // }
    }

    useEffect(() => { // если пользователь вставит ссылку в браузере самостоятельно, то произойдёт запрос на сервер с нужными данными (на одну позицию товара) и всё отрисуется:)
        if (!isEmptyBeers){
            dispatch(fetchBeers())
        }
        console.log(isEmptyBeers)
        console.log('boom')
        // dispatch(fetchBeerDetail(tempId))
    }, [])


    return (
        <div className={s.main}>
            <div className={s.firstPart}>
                {heightPicture > 350 ?
                <img className={s.currentBeerSecond} src={beers[tempId - 1]?.image_url} alt=""/> : ''}
                <img className={heightPicture > 350 || heightPicture === 0 ? s.currentBeer  :   s.littleBeer  } src={beers[tempId - 1]?.image_url} ref={imgRef} alt=""/>
            </div>

            <div className={heightPicture > 350 || heightPicture === 0 ? s.secondPartBigBeer : s.secondPartLittleBeer}>
                <img className={s.priceBeerPic} src={price} alt=""/>

                <div className={s.beerName}>{beers[tempId - 1]?.name?.split(' ').slice(0,2).join(' ')}</div>

                <div className={s.priceBeer}>
                   {beers[tempId - 1]?.price} ₽
                </div>

                <div className={s.description}>
                    {beers[tempId - 1]?.description}
                </div>

                {valueOfStuffShort === 0 ? '' : <div className={s.valueStuff}>Наличие: <span className={s.countValueStuff}>{valueOfStuffShort}</span></div>}

                {userLogged ?
                    <div>{valueOfStuffShort >= 1 ?
                     <div className={s.busketCounter}>
                         {errorCount ? <div className={s.dontCheating}>Не хитри, в наличии только {valueOfStuffShort} :)</div> : ''}
                         <button  onClick={onClickHandler} className={s.busket}>Добавить в корзину</button>
                        <input className={s.input} value={addToBasket} type="number" min={1} max={valueOfStuffShort} onChange={onChangeHandler}/>
                     </div> :
                        <div className={s.emptyStuff}>Нету в наличии</div>}
                    </div> : <div>Чтобы добавить товар в корзину залогинтесь</div>}
            </div>
        </div>
    );
};
