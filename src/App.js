
import './App.css';
import './Styles/Nav.css';
import './Styles/Main.css';
import './Styles/Footer.css';

/* import React from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
} */


import Home from "./Components/Home";
import Booking from "./Components/Booking";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";

const initialState = {
  availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, availableTimes: action.payload };
    default:
      return state;
  }
};

function App() {
  //const [availableTimes, setAvailableTimes] = useState(["17:00","17:30","18:00", "19:00", "20:00", "21:00", "22:00"])

  /* const initialState = {availableTimes: ["17:00", "17:45", "18:00", "19:00", "20:00", "21:00", "22:00"]}
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state) {
        return {availableTimes: ["test"]}
  } */

  const [state, dispatch] = useReducer(reducer, initialState);

  const updateTimes = () => {
    const updatedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    dispatch({ type: "UPDATE_TIMES", payload: updatedTimes });
  };

  const initializeTimes = () => {
    dispatch({ type: "UPDATE_TIMES", payload: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] });
  };

  useEffect(() => {
    initializeTimes();
  }, []); // Empty dependency array ensures it runs only once on mount

  

  return (
    <Router>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav> */} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking availableTimes={state.availableTimes}/>} />
      </Routes>
    </Router>
  );
}

export default App;
export { reducer };


