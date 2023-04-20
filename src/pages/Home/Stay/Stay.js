import React from 'react';
import stay from "../../../assets/images/stay.png"

import icons from "../../../icons/css/fontello.css"

const Stay = () => {
    return (
        <section className="stay">
            <div className="container">
                <div className="stay__row">
                    <div className="stay__left">
                        <h3 className="stay__left-title">Stay in touch with us</h3>
                        <p className="stay__left-text"> Vesterborg, Denmark</p>
                        <a href="+123 456 789 000" className="stay__link">+123 456 789 000</a>
                        <a href="info@theglasshuts.com" className="stay__link">info@theglasshuts.com</a>
                        <div className="stay__icons">
                            <a href="https://www.instagram.com/" className="stay__icon">
                                <span className='icon-instagram' >

                                </span>
                            </a>
                            <a href="https://ru-ru.facebook.com/" className="stay__icon">
                                <span className='icon-facebook-rect'>

                                </span>
                            </a>
                            <a href="https://twitter.com/?lang=ru" className="stay__icon">
                                <span className='icon-twitter-bird'>

                                </span>
                            </a>

                        </div>

                    </div>
                    <div className="stay__right">
                        <img src={stay} alt="" className="stay__img"/>
                        <div className="stay__btn">
                            <button className="begin__btn-right">Book a hut</button>
                            <p className="begin__btn-left">from
                                €3.200
                                <br/> per night</p>

                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Stay;