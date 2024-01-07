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

test('Initialize Times reducer function returns correct value', () => {
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
});