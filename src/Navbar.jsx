import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/eventCreationPage">Event creation</Link>
        </li>
        <li>
          <Link to="/organizerViewPage">Organizer view</Link>
        </li>
        <li>
          <Link to="/userViewPage">User view</Link>
        </li>
      </ul>
    </nav>
  );
}