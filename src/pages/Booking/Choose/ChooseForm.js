import React, {useContext} from 'react';

import {CustomContext} from "../../../utils/context/Context";

const ChooseForm = () => {

    const {cart} = useContext(CustomContext)
    console.log(cart)

    return (
        <div className="choose__form">
            {
             cart.map((item) => (
                 <div className="choose__form-card">
                     <h2>{item.title}</h2>
                     <p>{item.price}</p>


                 </div>
             ))
            }
            <div>
                {cart.reduce((acc,rec) => acc + rec.price , 0 )}
            </div>
        </div>
    );
};

export default ChooseForm;