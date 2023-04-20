import React from 'react';

import {BiMap} from "react-icons/bi"

const Book = () => {
    return (
        <section className='book'>
            <div className="container">
                <h1 className="book__title">Booking</h1>
                <div className="book__map">
                    <icon className="book__icon">
                        <BiMap/>
                    </icon>
                    <a href="" className="book__address">Vesterborg, Denmark</a>
                </div>
            </div>

        </section>
    );
};

export default Book;