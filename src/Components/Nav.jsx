import React, {useContext} from 'react';
import s from './Nav.module.css'
import {Link, Route, Routes} from 'react-router-dom'
import {ReactComponent as BasketIcon} from '../icons/basket.svg'
import logo from '../Img/logoBeer.png'
// import {Context} from "../context";
import {useDispatch, useSelector} from "react-redux";
import {ListBeers} from "./ListBeers";
import {Basket} from "./Basket";

export const Nav = () => {
    // const {setUserLogged,userLogged,setPopup,costBasket,sizeBasket} = useContext(Context)
    const dispatch = useDispatch()
    const userLogged = useSelector(state => state.beers.userLogged)
    const sizeBasket = useSelector(state => state.beers.sizeBasket)
    const costBasket = useSelector(state => state.beers.costBasket)

    const specialClass = s.basket + ' ' + s.hoverElement
    return (
        <div className={s.nav}>
            <div className={s.helperMenu}></div>
            <div className={s.pairFixedSize}>
                <Link className={s.fixedSize} to={'/beershop'}>Главная</Link>
                <Link className={s.fixedSize} to={'/about'}>О магазине</Link>
            </div>
            <div className={s.positionLogo}>
                <img className={s.logo} src={logo} alt=""/>
            </div>
            {userLogged ? <a onClick={() => dispatch({type: 'SET_USER_LOGGED', payload: false})} href={'#'}>Выход</a> :
                <a onClick={() => dispatch({type: 'SET_POPUP', payload: true})} href={'#'}>Вход</a>}


            {userLogged ? <Link className={specialClass} to={'/basket'}>
                <a className={s.basket} href={''}>
                <span className={s.spanHelper}>
                        <BasketIcon className={s.basketIcon}/>
                <div className={s.countBasket}>{sizeBasket}</div>
                </span>
                    <div className={s.sumBasket}>{costBasket} ₽.</div>
                </a></Link> : ''}

        </div>
    );
};
