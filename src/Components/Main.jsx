import React, {useContext} from 'react';
// import {Nav} from "./Nav";
import {ListBeers} from "./ListBeers";
import s from './Main.module.css'
// import {Beerdetails} from "./Beerdetails";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import {Nav} from "./Nav";
import {Aboutshop} from "./Aboutshop";
import {Notfoundpage} from "./Notfoundpage";
import {Beerdetails} from "./Beerdetails";
import {Basket} from "./Basket";
// import {Notfoundpage} from "./Notfoundpage";
// import {Aboutshop} from "./Aboutshop";
// import {Popup} from "./Popup";
// import {Context} from "../context";

export const Main = () => {
    // const {popup} = useContext(Context)

    return (
        <div className={s.main}>
            {/*{popup ? <Popup /> : ''}*/}
            <Nav/>
            <Routes>
                <Route path={'/beershop'} element={<ListBeers/>}/>

                <Route path={'/beershop/beerDetails/:beer'} element={<Beerdetails/>}/>

                <Route path={'/about'} element={<Aboutshop/>}/>

                <Route path={'*'} element={<Notfoundpage/>}/>

                <Route path={'/basket'} element={<Basket/>}/>

                {/**/}

            </Routes>
        </div>
    );
};
