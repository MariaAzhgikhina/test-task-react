import React from "react";
import './About.scss';
import ava1 from '../../img/ava-1.jpg'
import ava2 from '../../img/ava-2.jpg'
import ava3 from '../../img/ava-3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'




const About = () => (
    <div id="about" className="about">
    <div className=" container about__flex">
        <h2 className="title about__title">About Us</h2>
        <p className="subtitle about__subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        <div className="about__items">
            <div className="about__item">
                <img className="about__img" src={ava1} alt="human"/>
                <div className="about__text">
                    <div className="about__name">Melannie Doe</div>
                    <div className="about__position">Project manager</div>
                    <div className="about__description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</div>
                </div>
                <div className="about__links">
                    <a href="#" className="about__link"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#" className="about__link"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#" className="about__link"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                    <a href="#" className="about__link"><FontAwesomeIcon icon={faDribbble} /></a>
                </div>
            </div>
            <div className="about__item">
                <img className="about__img" src={ava3} alt="human"/>
                <div className="about__text">
                    <div className="about__name">Jhonnie Doe</div>
                    <div className="about__position">Graphic Designer</div>
                    <div className="about__description">Ut wisi enim ad minim veniam,
                        quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl
                        ut aliquip ex ea commodo
                        consequat.</div>
                </div>
                <div className="about__links">
                    <a href="#" className="about__link"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#" className="about__link"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#" className="about__link"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                    <a href="#" className="about__link"><FontAwesomeIcon icon={faDribbble} /></a>
                </div>
            </div>
            <div className="about__item">
                <img className="about__img" src={ava2} alt="human"/>
                <div className="about__text">
                    <div className="about__name">Daniel Doe</div>
                    <div className="about__position">Web Designer</div>
                    <div className="about__description">Ut wisi enim ad minim veniam,
                        quis nostrud exerci tation
                        ullamcorper suscipit lobortis nisl
                        ut aliquip ex ea commodo</div>
                </div>
                <div className="about__links">
                    <a href="#" className="about__link"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="#" className="about__link"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#" className="about__link"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                    <a href="#" className="about__link"><FontAwesomeIcon icon={faDribbble} /></a>
                </div>
            </div>
            
        </div>
    </div>    
</div>
)

export default About;