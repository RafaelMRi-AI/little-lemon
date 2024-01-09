
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


/* import Home from "./Components/Home";
import Booking from "./Components/Booking";
import ConfirmedBooking from "./Components/ConfirmedBooking";
import { Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import { useNavigate } from 'react-router-dom'; */

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Booking from "./Components/Booking";
import ConfirmedBooking from "./Components/ConfirmedBooking";
//import { useHistory } from "react-router-dom";
import { useState, useEffect, useReducer } from "react";


const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};
const submitAPI = function(formData) {
  return true;
};



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
  const navigateToConfirmedBooking = () => {
    window.location.href = "/confirmed";
  };

  const submitForm = async (formData) => {
    try {
      
      const apiResponse = await submitAPI(formData);

      
      if (apiResponse) {
        
        navigateToConfirmedBooking();
      } else {
        
        console.error("Booking submission failed.");
      }
    } catch (error) {
      
      console.error("Error submitting booking:", error);
    }
  };


  //const [availableTimes, setAvailableTimes] = useState(["17:00","17:30","18:00", "19:00", "20:00", "21:00", "22:00"])

  /* const initialState = {availableTimes: ["17:00", "17:45", "18:00", "19:00", "20:00", "21:00", "22:00"]}
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state) {
        return {availableTimes: ["test"]}
  } */

  const [state, dispatch] = useReducer(reducer, initialState);

  

  const updateTimes = (selectedDate) => {
    const updatedTimes = fetchAPI(selectedDate);
    dispatch({ type: "UPDATE_TIMES", payload: updatedTimes });
  };
  

  

  const initializeTimes = () => {
    const today = new Date();
    const availableTimes = fetchAPI(today);
    dispatch({ type: "UPDATE_TIMES", payload: availableTimes });
  };
  

  useEffect(() => {
    initializeTimes();
  }, []); // Empty dependency array ensures it runs only once on mount

  

  return (
    <main>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={state.availableTimes}
              updateTimes={updateTimes}
              submitForm={submitForm} 
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} /> 
      </Routes>
    </Router>
    </main>
  );
}

export default App;
export { reducer };


