import {React,useEffect} from "react";
import BookingForm from "./BookingForm";
import Header from "./Header";
import HeaderBookingForm from "./HeaderBookingForm";
import About from "./About";
import Footer from "./Footer";
import { useState } from "react";



const Booking = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  


    return (

      <div className="booking-container">
      <Header />
      <HeaderBookingForm />
        
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


