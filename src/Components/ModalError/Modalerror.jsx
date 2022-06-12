import React, {useContext, useEffect} from 'react';
import s from './Modalerror.module.css'
import {ReactComponent as Closeicon} from "../../icons/close.svg";
import {useDispatch, useSelector} from "react-redux";


export const Modalerror = (props) => {

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'SET_FETCHING_BEERS_ERROR', payload: false})
        },5000) // Закрыть модалку спустя время:)
    },[])

    const dispatch = useDispatch()

    const clickHandler = () => {
        dispatch({type: 'SET_FETCHING_BEERS_ERROR', payload: false})
    }

    return (
        <div className={s.modal}>
            <Closeicon onClick={clickHandler} className={s.closeIcon}/>
            <div className={s.noData}>{props.text} :(</div>
        </div>
    );
};
