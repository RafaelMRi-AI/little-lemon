import React, { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";

import "../Styles/BookingForm.css";

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");

  const [isDateValid, setIsDateValid] = useState(false);
  const [isTimesValid, setIsTimesValid] = useState(false);
  const [isGuestsValid, setIsGuestsValid] = useState(false);
  const [isOccasionValid, setIsOccasionValid] = useState(false);

  

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      occasion,
      guests,
      date,
      times,
    };
    props.submitForm(formData);
    props.navigateToConfirmedBooking(); // Navigate after successful form submission
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }

   const handleTimesChange = (e) => {
    const selectedTime = e.target.value;
    setTimes(selectedTime);
    setIsTimesValid(selectedTime !== "Select Time");
  } 

  const handleDatesChange = (e) => {
    const selectedDate = e.target.value;
    const bool = (selectedDate !== "")
    setDate(selectedDate);
    setIsDateValid(bool);
    // console.log(selectedDate,bool)
  } 

  const handleGuestsChange = (e) => {
    const guestsNumber = e.target.value;
    const bool = (guestsNumber > 0)
    setGuests(guestsNumber);
    setIsGuestsValid(bool);
    //console.log(guestsNumber,bool)
  } 

    
  return (
    <header className="booking-form-header">
      <section >
        
      <Form
      className="booking-form-form"
      onSubmit={handleSubmit}
    >
          <Form.Group controlId="formDate">
            <Form.Label className="booking-form-label">Choose Date</Form.Label>
            <Form.Control  className="booking-form-select"
              type="date"
              value={date}
              onChange={handleDatesChange}
              // onBlur={(e) => setIsDateValid(date !== "")}
              isInvalid={!isDateValid}
              required
            />
            {(!isDateValid)&&<div>Please select a valid date.</div>}
          </Form.Group>
          

          <Form.Group controlId="formTime">
            <Form.Label className="booking-form-label">Choose Time</Form.Label>
            <Form.Control  className="booking-form-select" 
            as="select"
            value={times}
            onChange={handleTimesChange}
            onBlur={() => setIsTimesValid(times !== "Select Time")}
            isInvalid={!isTimesValid}
            // onBlur={() => setIsTimesValid(times !== "Select Time")}
            required>
              <option>Select Time</option>
              {/* {props.availableTimes.map((availableTime, index) => (
                <option key={index}>{availableTime}</option>
              ))} */}
              {/* {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})} */}
              {props.availableTimes && props.availableTimes.map((availableTime, index) => (
      <option key={index}>{availableTime}</option>
    ))}
            </Form.Control>
            {(!isTimesValid)&&<div>Please select a valid time.</div>}
          </Form.Group>

          <Form.Group controlId="formGuests">
            <Form.Label className="booking-form-label">Number of Guests</Form.Label>
            <Form.Control className="booking-form-select"
              type="number"
              value={guests}
              onChange={handleGuestsChange}
              //onBlur={(e) => setIsGuestsValid(e.target.checkValidity())}
              isInvalid={!isGuestsValid}
              placeholder="0"
              min="1"
              max="10"
              required
            />
            {(!isGuestsValid)&&<div>Please select a valid number of guests.</div>}
          </Form.Group>

          <Form.Group controlId="formOccasion">
            <Form.Label className="booking-form-label">Occasion</Form.Label>
            <Form.Control className="booking-form-select"
              as="select"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              onBlur={(e) => setIsOccasionValid(!!occasion)}
              isInvalid={!isOccasionValid}
              required
            >
              <option>Select Occasion</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </Form.Control>
            
          </Form.Group>

 
          

          <Button id="button" variant="primary" type="submit" disabled={!isDateValid || !isTimesValid || !isGuestsValid} aria-label="On Click">
            Make Your Reservation
          </Button>
        </Form>
      </section>
      
    </header>
  );
};

export default BookingForm;
