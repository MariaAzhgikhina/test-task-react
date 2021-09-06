import React from "react";
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
    <footer className="footer">
        <div className="footer__flex container">
            <div className="footer__text">
                © Copyright 2016 Bla Bla Studio | One Page Flat Template
            </div>
            <a href="#top" className="button footer__btn">
                <FontAwesomeIcon icon={faChevronUp} />
            </a>
        </div>
    </footer>
)

export default Footer;