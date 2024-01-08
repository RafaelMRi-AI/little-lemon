import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";

import "../Styles/BookingForm.css";

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");

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

  return (
    <header className="booking-form-header">
      <section >
        <Form className="booking-form-form" onSubmit={handleSubmit}>
          <Form.Group controlId="formDate">
            <Form.Label className="booking-form-label">Choose Date</Form.Label>
            <Form.Control  className="booking-form-select"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formTime">
            <Form.Label className="booking-form-label">Choose Time</Form.Label>
            <Form.Control  className="booking-form-select" 
            as="select"
            value={times}
            onChange={(e) => setTimes(e.target.value)}>
              <option>Select Time</option>
              {/* {props.availableTimes.map((availableTime, index) => (
                <option key={index}>{availableTime}</option>
              ))} */}
              {/* {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})} */}
              {props.availableTimes && props.availableTimes.map((availableTime, index) => (
      <option key={index}>{availableTime}</option>
    ))}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formGuests">
            <Form.Label className="booking-form-label">Number of Guests</Form.Label>
            <Form.Control className="booking-form-select"
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              placeholder="1"
              min="1"
              max="10"
            />
          </Form.Group>

          <Form.Group controlId="formOccasion">
            <Form.Label className="booking-form-label">Occasion</Form.Label>
            <Form.Control className="booking-form-select"
              as="select"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option>Select Occasion</option>
              <option>Birthday</option>
              <option>Anniversary</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Make Your Reservation
          </Button>
        </Form>
      </section>
    </header>
  );
};

export default BookingForm;
