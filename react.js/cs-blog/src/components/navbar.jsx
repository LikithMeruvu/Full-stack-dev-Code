import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";

export default function navbar() {
    
   
    return (
        <nav>
            <Link className={`nav-link`} to="/" >Home</Link>
            <Link className={`nav-link`} to="/about" >About</Link>
            <Link className={`nav-link`} to="/about" >Blog</Link>
            <Link className={`nav-link`} to="/about" >Contact</Link>
        </nav>
    )
}
