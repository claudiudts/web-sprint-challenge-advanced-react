import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", async () => {
  render(<CheckoutForm />)
  const header = screen.getByText(/Checkout Form/i)
  expect (header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  const firstNameInput = screen.getByLabelText(/First Name/i);
  const lastNameInput = screen.getByLabelText(/Last Name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  
  userEvent.type(firstNameInput, "claudiu");
  userEvent.type(lastNameInput, "sarb");
  userEvent.type(addressInput, "8353 w harrison");
  userEvent.type(cityInput, "niles");
  userEvent.type(stateInput, "illinois");
  userEvent.type(zipInput, "60714");

  const button = screen.getByRole("button");
  userEvent.click(button);

  const testName = screen.getByText(/claudiu/i);
  const testLastName = screen.getByText(/sarb/i);
  const testAddress = screen.getByText(/8353 w harrison/i);
  const testCity = screen.getByText(/niles/i);
  const testState = screen.getByText(/illinois/i);
  const testZipCode = screen.getByText(/60714/i);

  expect(testName).toBeInTheDocument();
  expect(testLastName).toBeInTheDocument();
  expect(testAddress).toBeInTheDocument();
  expect(testCity).toBeInTheDocument();
  expect(testState).toBeInTheDocument();
  expect(testZipCode).toBeInTheDocument();

});

