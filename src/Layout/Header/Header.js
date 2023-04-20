import React from 'react';
import {NavLink} from "react-router-dom"
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <nav className="header__nav">
                    <h1 className="header__title">
                        <img src={logo} alt="" className='header__title-logo'/>
                    </h1>
                    <div className="header__menu">
                        <NavLink to={'/'} className="header__menu-link">Home</NavLink>

                        <NavLink to={'/the hut'} className="header__menu-link">the hut</NavLink>

                        <NavLink to={'/the area'} className="header__menu-link">The area</NavLink>

                        <NavLink to={'/booking'} className="header__menu-link">booking</NavLink>
                        <NavLink to={'/cart'} className="header__menu-link">cart</NavLink>

                        <NavLink to={'/about us'} className="header__menu-link">about us</NavLink>

                        <NavLink to={'/faq'} className="header__menu-link">faq</NavLink>
                    </div>
                    <button className="header__btn">Book Now</button>
                </nav>
            </div>
            
        </header>
    );
};

export default Header;