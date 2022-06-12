import React, {useContext} from 'react';
import s from './Nav.module.css'
import {Link} from 'react-router-dom'
import {ReactComponent as BasketIcon} from '../../icons/basket.svg'
import logo from '../../Img/logoBeer.png'
import {useDispatch, useSelector} from "react-redux";

export const Nav = () => {
    const dispatch = useDispatch()
    const {userLogged} = useSelector(state => state.authorization)
    const {costBasket,sizeBasket} = useSelector(state => state.basket)


    const specialClass = s.basket + ' ' + s.hoverElement
    return (
        <div className={s.nav}>
            <div className={s.helperMenu}></div>
            <div className={s.pairFixedSize}>
                <Link className={s.fixedSize} to={'/beermarketredux'}>Главная</Link>
                <Link className={s.fixedSize} to={'/about'}>О магазине</Link>
            </div>
            <div className={s.positionLogo}>
                <img className={s.logo} src={logo} alt=""/>
            </div>
            {userLogged ? <a onClick={() => dispatch({type: 'SET_USER_LOGGED', payload: false})} href={'#'}>Выход</a> :
                <a onClick={() => dispatch({type: 'SET_POPUP', payload: true})} href={'#'}>Вход</a>}


            {userLogged ? <Link className={specialClass} to={'/basket'}>
                <span className={s.basket}>
                <span className={s.spanHelper}>
                        <BasketIcon className={s.basketIcon}/>
                <div className={s.countBasket}>{sizeBasket}</div>
                </span>
                    <div className={s.sumBasket}>{costBasket} ₽.</div>
                </span></Link> : ''}

        </div>
    );
};
