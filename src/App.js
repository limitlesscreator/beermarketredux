import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {loadBeers} from "./actions/beersActions";
import {useEffect} from "react";

function App() {
  const dispatch = useDispatch()
  // useEffect(() => {
  // },[])
  return (
    <div>
      {/*{value.value}*/}

      <button onClick={() => dispatch(loadBeers)}>Fetch beers</button>

      <button onClick={() => dispatch({type: 'ADD_VALUE'})}>
      Add number
      </button>
      {/*<button onClick={() =>loadBeers()}>Fetch beers</button>*/}
    </div>
  );
}

export default App;
