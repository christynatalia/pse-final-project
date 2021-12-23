import React, {useState} from 'react';
import  { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
            <a class="navbar-brand" href="#">PSE Project</a>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;