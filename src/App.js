import './App.css';
import {useSelector} from "react-redux";
import React from "react";
import {Nav} from "./Components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import {ListBeers} from "./Components/ListBeers/ListBeers";
import {Beerdetails} from "./Pages/BeerDetails/Beerdetails";
import {Aboutshop} from "./Pages/AboutShop/Aboutshop";
import {Notfoundpage} from "./Pages/NotFountPages/Notfoundpage";
import {Basket} from "./Components/Basket/Basket";
import {Popup} from "./Components/Popup/Popup";
import {Modalerror} from "./Components/ModalError/Modalerror";
import {ABOUT_PAGE, BASKET_PAGE, BEER_DETAILS_PAGE, MAIN_PAGE} from "./constants";


function App() {
    const {popup} = useSelector(state => state.beers)
    const {fetchingBeersError} = useSelector(state => state.error)

    return (
        <>
            <div className={'main'}>
                {popup ? <Popup/> : ''}
                <Nav/>
                <Routes>
                    <Route path={MAIN_PAGE()} element={<ListBeers/>}/>

                    <Route path={BEER_DETAILS_PAGE()} element={<Beerdetails/>}/>

                    <Route path={ABOUT_PAGE()} element={<Aboutshop/>}/>

                    <Route path={'*'} element={<Notfoundpage/>}/>

                    <Route path={BASKET_PAGE()} element={<Basket/>}/>
                </Routes>

                {fetchingBeersError ? <Modalerror text={`Данные не пришли. Обновите страницу `}/> : ''}

            </div>
        </>
    );
}

export default App;
