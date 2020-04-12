
import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Header = () =>{

    return (
        <header>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        Site React
                    </Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/accueil" style={{color: "black"}}>Home</NavLink>;
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog" style={{color: "black"}}>Blog</NavLink>;
                        </li>
                        <li className="nav-item">
                            <NavLink to="/galerie" style={{color: "black"}}>Galerie</NavLink>;
                        </li>
                        <li className="nav-item">
                            <NavLink to="/formulaire" style={{color: "black"}}>Contact</NavLink>;
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
