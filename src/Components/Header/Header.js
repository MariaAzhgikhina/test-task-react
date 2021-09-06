import React, { Component } from "react";
import './Header.scss';
import logo from '../../img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';


class Header extends Component {

    state ={
        showBurgerMenu: false,
    }

    burgerMenuClick = (e) => {
        this.setState({
            showBurgerMenu: !this.state.showBurgerMenu
        })
    }

    render() {
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
                        <div className={classNames("header__burger", { 'header__burger_active': this.state.showBurgerMenu })} onClick={(e) => this.burgerMenuClick(e)}>
                            <span></span>
                        </div>
                        <nav className={classNames("menu__body", { 'menu__body_active': this.state.showBurgerMenu })}>
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
}

export default Header;