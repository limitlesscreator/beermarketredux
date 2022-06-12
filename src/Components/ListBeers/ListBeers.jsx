import React, {useContext, useEffect} from 'react';
// import {Beer} from "./Beer";
import s from './ListBeers.module.css'
import open from '../../Img/open.png'
import coldBeer from '../../Img/coldBeer.png'
import {useDispatch, useSelector} from "react-redux";
import {fetchBeers} from "../../actions/beersActions";
import {Beer} from "../Beer/Beer";

export const ListBeers = () => {
    const dispatch = useDispatch()
    const beers = useSelector(state => state.beers.beers)

    useEffect(() => {
        if (beers.length === 0) {
            dispatch(fetchBeers())
        }
    }, [])

    return (
        <div className={s.cards}>
            <img className={s.open} src={open} alt="openSign"/>
            <img className={s.coldBeer} src={coldBeer} alt="coldBeer"/>
            {beers?.map(el => {
                return (
                    <Beer
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
