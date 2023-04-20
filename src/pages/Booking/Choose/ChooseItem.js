import React, {useContext, useState} from 'react';
import {BsCheckCircleFill, BsChevronDown, BsPlusCircle} from "react-icons/bs";
import {CustomContext} from "../../../utils/context/Context";

const ChooseItem = ({item}) => {
    const {changeCart} = useContext(CustomContext)
    const [active , setActive] = useState(false)
    return (
        <>
            <div className="choose__content" key={item.id}>
                <div className="choose__btn" onClick={() => changeCart(item)}>
                    <BsPlusCircle/>
                </div>
                <div  style={{display:"none"}} className="choose__btn">
                    <BsCheckCircleFill/>
                </div>
                <div className="choose__content-block">
                    <h2 className="choose__content-title">
                        {item.title}
                    </h2>
                    <p className="choose__content-price">
                        {item.price} kr
                    </p>

                    <div className="choose__btn choose__btn-one " onClick={() => setActive(!active)}>
                        <BsChevronDown/>
                    </div>
                    <div style={{display : active? 'block' : 'none'}} className="choose__drop">
                        <h2 className="choose__drop-title">Fresh Breakfast for one </h2>
                        <p className="choose__drop-text">Bread, Coffee, milk, juice, and a selection of spreads + toppings.</p>
                    </div>
                </div>
                </div>
        </>
    );
};

export default ChooseItem;