import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";

test("renders Navbar with Home, About, and Contact links", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );

  const homeLink = screen.getByText(/Home/i);
  const aboutLink = screen.getByText(/About/i);
  const contactLink = screen.getByText(/Contact/i);

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});
