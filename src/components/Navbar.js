import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                <div class="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse_target" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon">
                        </span>
                    </button>
                    <a class="navbar-brand" href="/">
                        <span class="project-title">
                            PSE Project
                        </span>
                    </a>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle end-0" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="bi bi-list icon-dropdown">
                            </span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Notifications</a> 
                        </div>
                    </li>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;