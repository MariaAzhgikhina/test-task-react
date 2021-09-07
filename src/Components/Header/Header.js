import React, { useState } from "react";
import './Header.scss';
import logo from './asserts/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';


export default function Header () {
    
    const [showBurgerMenu, setBurgerMenu] = useState(false);

    function handleBurgerClick(e) {
        setBurgerMenu(!showBurgerMenu)
    }


    return (
        <header id="top" className="header">
            <div className="header__top container">
                <div className="logo">
                    <a href="index.html"><img src={logo} alt="logo" className="logo__img" /></a>
                    <div className="logo__text">
                        <div className="logo__title">BLA BLA</div>
                        <div className="logo__subtitle">One Page Flat Template</div>
                    </div>
                    
                </div>
                <div className="header__menu menu">
                    <div className={classNames("header__burger", { 'header__burger_active': showBurgerMenu })} onClick={handleBurgerClick}>
                        <span></span>
                    </div>
                    <nav className={classNames("menu__body", { 'menu__body_active': showBurgerMenu })}>
                        <ul className="menu__ul">
                            <li className="menu__li"><a href="#top" className="menu__link">HOME</a></li>
                            <li className="menu__li"><a href="#portfolio" className="menu__link">PORTFOLIO</a></li>
                            <li className="menu__li"><a href="#about" className="menu__link">ABOUT</a></li>
                            <li className="menu__li"><a href="#contact" className="menu__link">CONTACT</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="header__bottom">
                <div className="header__flex container">
                    <div className="header__h1">We Build <span className="bold">Brand</span></div>
                    <div className="header__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                    <a href="#portfolio" className="button header__more">LEARN MORE</a>
                    <div className="header__down"><FontAwesomeIcon icon={faChevronCircleDown} /></div>  
                </div>
                
            </div>
        </header>
    )
}
