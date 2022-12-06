import React from "react";
import { NavLink } from 'react-router-dom'

export default function Navbar(){
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
        <NavLink className='navbar-brand text-uppercase' to='/'><span className="navbar-text">Main</span></NavLink>
        <NavLink className='navbar-brand text' to='/details'><span className="navbar-text">Details</span></NavLink>
        <NavLink className='navbar-brand text' to='/about'><span className="navbar-text">About</span></NavLink>
            </div>
        </nav>
    )
}
   