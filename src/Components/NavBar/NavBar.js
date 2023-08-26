import React, { useRef } from "react";
import "./NavBar.css";
import logopm from "../../assets/images/logo-pm.png";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const containerNavbar = useRef(null);

  const navbarCollapsed = (e) => {
    containerNavbar.current.classList.remove("show");
  };

  return (
    <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" exact to={"/"}>
        <img src={logopm} className="logo-pm" alt="logo" />
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNavAltMarkup"
        ref={containerNavbar}
      >
        <div className="navbar-nav">
          <NavLink
            className="nav-item nav-link"
            activeClassName="selected"
            to={"/categories/naturaleza"}
            onClick={navbarCollapsed}
          >
            Naturaleza
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            activeClassName="selected"
            to={"/categories/animales"}
            onClick={navbarCollapsed}
          >
            Animales
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            activeClassName="selected"
            to={"/categories/musica"}
            onClick={navbarCollapsed}
          >
            Música
          </NavLink>
          <NavLink
            activeClassName="selected"
            className="nav-item nav-link nav-item-cart"
            to={"/cart"}
            onClick={navbarCollapsed}
          >
            <CartWidget />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
