import React from 'react';
import { NavLink } from "react-router-dom";
import "../App.css";

export default function navbar() {
    
   
    return (
        <nav>
            <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "blue" })} className={`nav-link`} to="/" >Home</NavLink>
            <NavLink style={({ isActive }) => ({ color: isActive ? "green" : "blue" })} className={`nav-link`} to="/about" >About</NavLink>
        </nav>
    )
}
