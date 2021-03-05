import React from 'react';
import './Header.css'
import logo from '../../images/logo2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div>
                    <img src={logo} alt=""/>
                </div>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex align-items-center">
                            <li><FontAwesomeIcon icon={faShoppingCart} /></li>
                            
                            <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                            </li>
                            <li className="nav-item">
                            <button className="signUp-btn">Sign up</button>
                            </li>
                            
                        </ul>
                </div>
                </div>
                
                
            </div>
        </nav>
    );
};

export default Header;