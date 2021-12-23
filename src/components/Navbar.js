import React, {useState} from 'react';
import  { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div class="Navbar">
            <div class="Navbar-container">
               <Link to="/" class="navbar-logo"> 
                    PSE Project
               </Link> 
            </div>
        </div>
    )
}

export default Navbar;