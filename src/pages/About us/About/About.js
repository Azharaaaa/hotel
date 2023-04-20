import React from 'react';
import {Link} from "react-router-dom"

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about__content">
                    <h2 className="about__title">About Us</h2>
                    <div className="about__btns">
                        <button  className="about__btn">contact us</button>

                        <Link to={'/faq'}>
                              <button className="about__btn">read FAQ</button>
                        </Link>
                    </div>
                </div>

            </div>
            
        </section>
    );
};

export default About;