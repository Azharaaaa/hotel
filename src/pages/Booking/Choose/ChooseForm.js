import React, {useContext} from 'react';

import {CustomContext} from "../../../utils/context/Context";
import {Link} from "react-router-dom";

const ChooseForm = () => {

    const {cart} = useContext(CustomContext)
    console.log(cart)

    return (
        <div className="choose__form">
            {
             cart.map((item) => (
                 <div className="choose__form-card">
                     <h2 >{item.title}</h2>
                     <p className="choose__form-price">{item.price}</p>


                 </div>
             ))
            }
            <div className="choose__form-counter">
                {cart.reduce((acc,rec) => acc + rec.price , 0 )}
            </div>


            <Link to={'/cart'}>
                <button className="header__btn">Ok</button>
            </Link>
        </div>
    );
};

export default ChooseForm;