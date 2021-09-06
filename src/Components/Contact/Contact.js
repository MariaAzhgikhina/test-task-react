import React , {Component, useEffect  } from 'react';
import './Contact.scss';
import {init} from '../../map.js'


const fetchScript = (url) =>{
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');

        script.type = 'text/javascript';
        script.onload = resolve;
        script.onerror = reject;
        script.src = url;
        script.async = 'async';

        document.head.appendChild(script);
        });
}

const Contact = () => {

    useEffect(() => {
        fetchScript("https://api-maps.yandex.ru/2.1/?apikey=d4a1f80f-f18d-41f3-ae73-40c9a2ad6419&lang=ru_RU").then(() => {
            window.ymaps.ready(init);
        })
    });

    return (
        <div id="contact" className="contact">
            <div className="contact__flex container">
                <h2 className="title">Contact Us</h2>
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                <div className="contact__content">
                    <form className="contact__left" action="#">
                        <div className="contact__inputs">
                            <input type="text" className="contact__input" placeholder="Your name"/>
                            <input type="email" className="contact__input" placeholder="Your email"/>
                        </div>
                        <textarea className="contact__textarea" name="" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                        <button type="submit" className="button contact__btn">SUBMIT</button>
                    </form>
                    <div className="contact__right">
                        <p className="subtitle contact__subtitle"><i className="fas fa-map-marker-alt"></i> Bla Bla Company 125009 Moscow, Red Square 1</p>
                        <div className="contact__map">
                            <div id="map"></div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Contact;