import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-content">
                <img className="logo" src={logo} alt="Logo" />
                <div className="title-container">
                    <h1>CyberPulse Creations</h1>
                    <h2>Creating Vibrant Digital Experiences, One Pulse at a Time</h2>
                </div>
                <div className="container-navlinks">
                    <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    <NavLink to="/pricing" activeClassName="active-link">Pricing</NavLink>
                    <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
