import React from 'react';
import map from "../../../assets/images/map.png"


const Address = () => {
    return (
        <section className="address">
            <div className="container">
                <div className="address__content">
                    <h2 className="address__title">Lorem ipsum dolor sit amet, consectetur adipiscing...</h2>
                    <img src={map} alt="" className="address__img"/>
                </div>

            </div>

        </section>
    );
};

export default Address;