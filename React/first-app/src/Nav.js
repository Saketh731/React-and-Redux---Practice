import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav(props) {
    const linkStyle = {
        color: "white"
    }
    return(
        <nav>
            <h3>Router</h3>
            <ul className="nav-links">
                <Link to="/about" style={linkStyle}>
                    <li>About</li>
                </Link>
                <Link to="/users" style={linkStyle}>
                    <li>Users</li>
                </Link>
                <Link to="/cakeshop" style={linkStyle}>
                    <li>CakeShop</li>
                </Link>
                <Link to="/hookscakeshop" style={linkStyle}>
                    <li>HooksCakeShop</li>
                </Link>
                <Link to="/icecreamshop" style={linkStyle}>
                    <li>IceCreamShop</li>
                </Link>
                <Link to="/usercontainer" style={linkStyle}>
                    <li>UserContainer</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;