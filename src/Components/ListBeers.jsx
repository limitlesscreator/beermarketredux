import React, {useContext, useEffect} from 'react';
// import {Beer} from "./Beer";
import s from './ListBeers.module.css'
import open from '../Img/open.png'
import coldBeer from '../Img/coldBeer.png'
import {useDispatch, useSelector} from "react-redux";
import {fetchBeers} from "../actions/beersActions";
import {Beer} from "./Beer";
// import {Context} from "../context";

export const ListBeers = () => {
    const dispatch = useDispatch()
    const beers = useSelector(state => state.beers.beers)
    // const valueOfStuff = useSelector(state => state.beers.valueOfStuff)

    // const value = useSelector(state => state.beers.value)
    // const {
    //     valueOfStuff,
    //     fetchBeers,
    //     beers,
    // } = useContext(Context)


    // useEffect(() => {
    //     if (beers.length === 0) {
    //         fetchBeers('ListBeers')
    //     }
    // }, [])

    useEffect(() => {
        if (beers.length === 0) {
            // fetchBeers('ListBeers')
            dispatch(fetchBeers())
        }
    }, [])

    return (
        <div className={s.cards}>
            <img className={s.open} src={open} alt="openSign"/>
            <img className={s.coldBeer} src={coldBeer} alt="coldBeer"/>
            {beers.map(el => {
                return (
                    <Beer
                        // valueOfStuff={valueOfStuff[el.id - 1]?.valueOfStuff}
                        valueOfStuff={el.valueOfStuff}
                        id={el.id}
                        key={el.id}
                        beer={el}
                    />
                )
            })}
        </div>
    );
};
