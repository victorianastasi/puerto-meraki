import React from 'react';
import './NavBar.css';
import logopm from '../../assets/images/logo-pm.png';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" exact to={'/'}>
                <img src={logopm} className="logo-pm" alt="logo" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" activeClassName="selected" to={'/categories/naturaleza'}>
                        Naturaleza
                    </NavLink>
                    <NavLink className="nav-item nav-link" activeClassName="selected" to={'/categories/animales'}>
                        Animales
                    </NavLink>
                    <NavLink className="nav-item nav-link" activeClassName="selected" to={'/categories/musica'}>
                        Música
                    </NavLink>
                    <NavLink activeClassName="selected" className="nav-item nav-link" to={'/cart'}>
                        <CartWidget />
                    </NavLink>
                </div>
            </div>
        </nav>
    );  
};

export default NavBar;