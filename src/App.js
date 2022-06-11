import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchBeers} from "./actions/beersActions";
import React, {useEffect} from "react";
import {Main} from "./Components/Main";

function App() {
  const dispatch = useDispatch()
  return (
    <>
      {/*<button onClick={() => dispatch(loadBeers)}>Fetch beers</button>*/}

      {/*<button onClick={() => dispatch({type: 'ADD_VALUE'})}>*/}
      {/*Add number*/}
      {/*</button>*/}
        <Main/>

    </>
  );
}

export default App;
