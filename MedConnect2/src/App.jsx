import { Routes, Route, Link } from "react-router-dom";

import Home from "./home";
import Doctors from "./doctor";
import Nutrition from "./Nutrition";
import Appointment from "./Appointment";

import logo from "./assets/logo.png";

import "./App.css";
function App() {
  return (
    <>
      {/* NAVBAR */}

      <nav className="navbar">

        <Link to="/">
          <img
            src={logo}
            className="logo"
            alt="MedConnect Logo"
          />
        </Link>

        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/doctors">
            Doctors
          </Link>

          <Link to="/nutrition">
            Nutrition
          </Link>

          <Link to="/appointment">
            Appointment
          </Link>

        </div>

      </nav>


      {/* PAGES */}

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/doctors"
          element={<Doctors />}
        />

        <Route
          path="/nutrition"
          element={<Nutrition />}
        />

        <Route
          path="/appointment"
          element={<Appointment />}
        />

      </Routes>

    </>
  );
}

export default App;



