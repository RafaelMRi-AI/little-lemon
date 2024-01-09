import {React, useEffect} from 'react';
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";



const ConfirmedBooking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Header />
    <div className="booking-form-header">
      <h1>Booking Confirmed!</h1>
      <p>Your reservation has been successfully confirmed. We look forward to serving you.</p>
    </div>
    <About />
    <Footer />
    </>
  );
};

export default ConfirmedBooking;