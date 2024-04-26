import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <div classname="right">
        <Link to="/" className="navLink">Home</Link>
        <Link to="/hospitals" className="navLink">Hospitals</Link>
        <Link to="/contact" className="navLink">Contact</Link>
        <Link to="/login" className="navLink">Login</Link>
      </div>
    </div>
  );
};
export default Navbar;
