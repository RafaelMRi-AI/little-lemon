import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import App, { reducer } from './App';
import BookingForm from './Components/BookingForm';
import Header from './Components/Header';

jest.setTimeout(10000);

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Choose Time");
  expect(headingElement).toBeInTheDocument();
});

test('Renders the BookingForm date label', () => {
  render(<BookingForm />);
  const labelElement = screen.getByText("Choose Date");
  expect(labelElement).toBeInTheDocument();
});

/* test('Initialize Times reducer function returns correct value', () => {
  const initialState = {
    availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  };

  const newState = reducer(initialState, { type: "UPDATE_TIMES", payload: initialState.availableTimes });

  expect(newState).toEqual(initialState);
});

test('Update Times reducer function returns the provided value', () => {
  const initialState = {
    availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  };

  const updatedTimes = [ "18:00", "19:00", "20:00", "21:00", "22:00"];
  const newState = reducer(initialState, { type: "UPDATE_TIMES", payload: updatedTimes });

  expect(newState.availableTimes).toEqual(updatedTimes);
}); */

test('Initialize Times sets available times correctly', () => {
  const initialState = {
    availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  };

  const updatedTimes = ["18:00", "19:00", "20:00", "21:00", "22:00"];

  const fetchAPI = jest.fn(() => updatedTimes);

  const newState = reducer(initialState, { type: "UPDATE_TIMES", payload: fetchAPI(new Date()) });

  expect(newState.availableTimes).toEqual(updatedTimes);
  expect(fetchAPI).toHaveBeenCalledTimes(1);
});

test('Update Times sets available times correctly', () => {
  const initialState = {
    availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  };

  const updatedTimes = ["18:00", "19:00", "20:00", "21:00", "22:00"];

  const fetchAPI = jest.fn(() => updatedTimes);

  const newState = reducer(initialState, { type: "UPDATE_TIMES", payload: fetchAPI(new Date()) });

  expect(newState.availableTimes).toEqual(updatedTimes);
  expect(fetchAPI).toHaveBeenCalledTimes(1);
});

// Step 1: Validate the HTML5 validation is applied
test('Form input fields have correct HTML5 validation attributes', () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText("Choose Date");
  const timeSelect = screen.getByLabelText("Choose Time");
  const guestsInput = screen.getByLabelText("Number of Guests");
  const occasionSelect = screen.getByLabelText("Occasion");

  expect(dateInput).toHaveAttribute('type', 'date');
  expect(timeSelect).not.toHaveAttribute('type');
  expect(guestsInput).toHaveAttribute('type', 'number');
  expect(occasionSelect).not.toHaveAttribute('type');
});

// Step 2: Add unit tests for JavaScript validation functions
test('Validates date input correctly', () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText("Choose Date");

  fireEvent.change(dateInput, { target: { value: '2024-01-10' } });

  expect(dateInput).toBeValid();
});

test('Validates time select correctly', () => {
  render(<BookingForm />);
  const timeSelect = screen.getByLabelText("Choose Time");

  fireEvent.change(timeSelect, { target: { value: '18:00' } });

  expect(timeSelect).toBeValid();
});

test('Validates guests input correctly', () => {
  render(<BookingForm />);
  const guestsInput = screen.getByLabelText("Number of Guests");

  fireEvent.change(guestsInput, { target: { value: '5' } });

  expect(guestsInput).toBeValid();
});

test('Validates occasion select correctly', () => {
  render(<BookingForm />);
  const occasionSelect = screen.getByLabelText("Occasion");

  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

  expect(occasionSelect).toBeValid();
});