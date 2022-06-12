import React, {useContext, useEffect, useState} from 'react';
import s from './Popup.module.css'
import {ReactComponent as Closeicon} from "../../icons/close.svg";
import {useDispatch, useSelector} from "react-redux";

export const Popup = () => {
    const dispatch = useDispatch()
    const {beers} = useSelector(state => state.beers)
    const {userPassword, userLogin} = useSelector(state => state.authorization)
    const {errorLogged } = useSelector(state => state.error)



    const loggedUser = () => {
        let ifUserReal = false

        for (let i = 0; i < beers.length; i++) {
            if (String(beers[i]['name']) === userLogin && String(beers[i]['target_fg']) === userPassword) {
                ifUserReal = true
                break
            }
        }
        // name: login
        // target_fg:  пароль
        if (ifUserReal) {
            dispatch({type: 'SET_USER_LOGGED', payload: true})
            dispatch({type: 'SET_POPUP', payload: false})
            console.log('user logged')
        } else {
            dispatch({type: 'SET_ERROR_LOGGED', payload: true})
            console.log('error')
        }
    }

    const handleKeypress = e => { // Нажатие Enter === Нажать на кнопку
        if (e.code  === 'Enter') {
            loggedUser();
        }
    };

    return (
        <div className={s.main}>
            <div className={s.square}>
                <Closeicon onClick={() => dispatch({type: 'SET_POPUP', payload: false})} className={s.closeIcon}/>

                <div className={s.inputContainer}>
                    <input type="text" placeholder={'login'} onKeyPress={handleKeypress} onChange={(e) => {
                        dispatch({type: 'SET_ERROR_LOGGED', payload: false})
                        dispatch({type: 'SET_USER_LOGIN', payload: e.currentTarget.value})

                    }}/>
                    <input type="text" placeholder={'password'} onKeyPress={handleKeypress} onChange={(e) => {
                        dispatch({type: 'SET_USER_PASSWORD', payload: e.currentTarget.value})
                        dispatch({type: 'SET_ERROR_LOGGED', payload: false})
                    }}/>
                </div>

                <div className={s.buttonContainer}>
                    <button onClick={loggedUser}>Войти</button>
                    <button onClick={() => dispatch({type: 'SET_POPUP', payload: false})}>Отмена</button>
                </div>

                {errorLogged ? <div className={s.wrongPasswork}>Неверный пароль или логин</div> : ''}
            </div>
        </div>
    );
};
