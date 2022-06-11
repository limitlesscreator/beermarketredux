import React from 'react';
import s from './Basket.module.css'
import {useSelector} from "react-redux";
export const Basket = () => {
    const basket = useSelector(state => state.beers.basket)

    return (
        <div className={s.main}>
            <table className={s.purpleHorizon}>
                <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price for 1</th>
                    <th>Кол-во</th>
                    <th>total</th>
                    <th>head6</th>
                </tr>
                </thead>
                <tbody>
                    {basket.map(el => {
                        return (
                            <tr>
                                <td><td>{el.id}</td></td>
                                <td><td>{el.name}</td></td>
                                <td><td>{el.price}</td></td>
                                <td><td>{4}</td></td>
                                <td><td>{'420р'}</td></td>
                                <td><td><button>delete</button></td></td>
                            </tr>
                        )
                    })}
                    {/*<td>cell1_1</td>*/}
                    {/*<td>cell2_1</td>*/}
                    {/*<td>cell3_1</td>*/}
                    {/*<td>cell4_1</td>*/}
                    {/*<td>cell5_1</td>*/}
                    {/*<td>cell6_1</td>*/}
                {/*<tr>*/}
                {/*    <td>cell1_2</td>*/}
                {/*    <td>cell2_2</td>*/}
                {/*    <td>cell3_2</td>*/}
                {/*    <td>cell4_2</td>*/}
                {/*    <td>cell5_2</td>*/}
                {/*    <td>cell6_2</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>cell1_3</td>*/}
                {/*    <td>cell2_3</td>*/}
                {/*    <td>cell3_3</td>*/}
                {/*    <td>cell4_3</td>*/}
                {/*    <td>cell5_3</td>*/}
                {/*    <td>cell6_3</td>*/}
                {/*</tr>*/}
                {/*<tr>*/}
                {/*    <td>cell1_4</td>*/}
                {/*    <td>cell2_4</td>*/}
                {/*    <td>cell3_4</td>*/}
                {/*    <td>cell4_4</td>*/}
                {/*    <td>cell5_4</td>*/}
                {/*    <td>cell6_4</td>*/}
                {/*</tr>*/}
                </tbody>
            </table>
        </div>
    );
};
