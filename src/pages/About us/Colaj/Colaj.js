import React from 'react';
import colaj1 from "../../../assets/images/colaj1.png"
import colaj2 from "../../../assets/images/colaj2.png"
import colaj3 from "../../../assets/images/colaj3.png"
import colaj4 from "../../../assets/images/colaj4.png"

const Colaj = () => {
    return (
        <section className="colaj">
            <div className="container">
                <h2 className="colaj__title">Lorem ipsum dolor sit amet, consectetur adipiscing...</h2>
                <div className="colaj__row">
                    <div className="colaj__first">
                        <img src={colaj1} alt="" className="colaj__img"/>
                        <img src={colaj2} alt="" className="colaj__img-1"/>
                        <img src={colaj3} alt="" className="colaj__img"/>
                        <p className="colaj__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src={colaj4} alt="" className="colaj__img"/>
                    </div>


                </div>
            </div>
            
        </section>
    );
};

export default Colaj;