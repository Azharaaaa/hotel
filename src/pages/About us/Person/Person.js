import React from 'react';
import person from "../../../assets/images/person.png"

const Person = () => {
    return (
        <section className="person">
            <div className="container">
                <div className="person__row">
                    <div className="person__left">
                        <img src={person} alt="" className="person__img"/>
                    </div>
                    <div className="person__right">
                        <h2 className="person__title">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</h2>
                        <p className="person__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Person;