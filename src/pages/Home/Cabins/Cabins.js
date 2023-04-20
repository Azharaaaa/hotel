import React from 'react';

import cabin from "../../../assets/images/cabins.png"

const Cabins = () => {
    return (
        <section className='cabins'>
            <div className="container">
                <div className="cabins__card">
                    <div className="cabins__left">
                        <h2 className="cabins__title">The Cabins</h2>
                        <p className="cabins__text">Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. The cottages are built around tall, old trees that go through the entire cottage from floor to ceiling.</p>
                    </div>
                    <div className="cabins__right">
                        <img src={cabin} alt="" className="cabins__img"/>
                    </div>
                </div>
                
            </div>

        </section>
    );
};

export default Cabins;