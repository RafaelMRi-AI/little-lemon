import React from "react";
import BookingForm from "./BookingForm";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import { useState } from "react";



const Booking = (props) => {



    return (

      <div className="booking-container">
      <Header />
        
      <BookingForm
        availableTimes={props.availableTimes}
        dispatch={props.dispatch}
        submitForm={(formData) => props.submitForm(formData)}
        navigateToConfirmedBooking={props.navigateToConfirmedBooking}
      />
      <About />
      <Footer />
      </div>
        
    )
}

export default Booking;


