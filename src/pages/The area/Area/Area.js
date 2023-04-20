import React from 'react';

import {BiMap} from "react-icons/bi"

const Area = () => {
    return (
        <section className='area'>
            <div className="container">
                <h1 className="area__title">The Area</h1>
                <div className="area__map">
                    <icon className="area__icon">
                        <BiMap/>
                    </icon>
                    <a href="" className="area__address">Vesterborg, Denmark</a>
                </div>
            </div>

        </section>
    );
};

export default Area;