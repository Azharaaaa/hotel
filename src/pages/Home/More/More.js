import React from 'react';
import {Link} from "react-router-dom"


import more1 from "../../../assets/images/more1.png"
import more2 from "../../../assets/images/more2.png"

const More = () => {
    return (
        <section className="more">

            <div className="more__row">
                <div className="more__left">
                    <img src={more1} alt="" className="more__img"/>
                </div>
                <div className="more__right">
                    <img src={more2} alt="" className="more__img"/>
                </div>
                <Link to={'/about us '}>
                    <button className="more__btn">More about us</button>
                </Link>



            </div>

        </section>
    );
};

export default More;