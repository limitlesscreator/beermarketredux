import './App.css';
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {Nav} from "./Components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import {ListBeers} from "./Components/ListBeers/ListBeers";
import {Beerdetails} from "./Pages/BeerDetails/Beerdetails";
import {Aboutshop} from "./Pages/AboutShop/Aboutshop";
import {Notfoundpage} from "./Pages/NotFountPages/Notfoundpage";
import {Basket} from "./Components/Basket/Basket";
import {Popup} from "./Components/Popup/Popup";

function App() {
    const dispatch = useDispatch()
    const popup = useSelector(state => state.beers.popup)

    return (
        <>
            <div className={'main'}>
                {/*{popup ? <Popup /> : ''}*/}
                <Nav/>
                <Routes>
                    <Route path={'/beershop'} element={<ListBeers/>}/>

                    <Route path={'/beershop/beerDetails/:beer'} element={<Beerdetails/>}/>

                    <Route path={'/about'} element={<Aboutshop/>}/>

                    <Route path={'*'} element={<Notfoundpage/>}/>

                    <Route path={'/basket'} element={<Basket/>}/>

                </Routes>
            </div>
        </>
    );
}

export default App;
