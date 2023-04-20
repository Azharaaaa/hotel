import React, {useState} from 'react';
import {CiCircleChevDown} from "react-icons/ci"

const Question = () => {

    const [active , setActive] =useState(false)

    return (
        <section className="question">
            <div className="container">

                    <div className="question__block">
                        <div className="question__box" onClick={() =>setActive(prev =>!prev)}>
                            <h2 className="question__title">PRICES</h2>
                            <CiCircleChevDown/>
                        </div>
                    </div>
                    <div  style={{display : active? 'block' : 'none'}} className="question__item ">
                         <h2 className="question__title">CANCELLATION POLICY</h2>
                         <p className="question__text">Cancellation four weeks prior = 100% refund</p>
                         <p className="question__text"> Cancellation two weeks prior = 50% refund</p>
                         <p className="question__text">  Cancellation later than two weeks = full payment</p>
                    </div>



                    <div className="question__block">
                        <div className="question__box">
                            <h2 className="question__title">THE WALK UP TO GLASS HUT</h2>
                            <div className="question__icon" onClick={() =>setActive(prev =>!prev)}>
                                <CiCircleChevDown/>
                            </div>

                        </div>

                    </div>
                    <div  style={{display : active? 'block' : 'none'}} className="question__item ">
                    <h2 className="question__title">CANCELLATION POLICY</h2>
                    <p className="question__text">Cancellation four weeks prior = 100% refund</p>
                    <p className="question__text"> Cancellation two weeks prior = 50% refund</p>
                    <p className="question__text">  Cancellation later than two weeks = full payment</p>
                </div>



                   <div className="question__block">
                        <div className="question__box">
                            <h2 className="question__title">CAPACITY</h2>
                            <div className="question__icon" onClick={() =>setActive(prev =>!prev)}>
                                <CiCircleChevDown/>
                            </div>

                        </div>


                  </div>
                   <div  style={{display : active? 'block' : 'none'}} className="question__item ">
                    <h2 className="question__title">CANCELLATION POLICY</h2>
                    <p className="question__text">Cancellation four weeks prior = 100% refund</p>
                    <p className="question__text"> Cancellation two weeks prior = 50% refund</p>
                    <p className="question__text">  Cancellation later than two weeks = full payment</p>
                </div>



                   <div className="question__block">
                        <div className="question__box">
                            <h2 className="question__title">PETS</h2>
                            <div className="question__icon" onClick={() =>setActive(prev =>!prev)}>
                                <CiCircleChevDown/>
                            </div>

                        </div>

                        <div  style={{display : active? 'block' : 'none'}} className="question__item ">
                            <h2 className="question__title">CANCELLATION POLICY</h2>
                            <p className="question__text">Cancellation four weeks prior = 100% refund</p>
                            <p className="question__text"> Cancellation two weeks prior = 50% refund</p>
                            <p className="question__text">  Cancellation later than two weeks = full payment</p>
                        </div>


                    </div>
                   <div  style={{display : active? 'block' : 'none'}} className="question__item ">
                    <h2 className="question__title">CANCELLATION POLICY</h2>
                    <p className="question__text">Cancellation four weeks prior = 100% refund</p>
                    <p className="question__text"> Cancellation two weeks prior = 50% refund</p>
                    <p className="question__text">  Cancellation later than two weeks = full payment</p>
                </div>



                   <div className="question__block">
                        <div className="question__box">
                            <h2 className="question__title">CHECK-IN / CHECK-OUT</h2>
                            <div className="question__icon" onClick={() =>setActive(prev =>!prev)}>
                                <CiCircleChevDown/>
                            </div>

                        </div>
                    </div>
                   <div  style={{display : active? 'block' : 'none'}} className="question__item ">
                    <h2 className="question__title">CANCELLATION POLICY</h2>
                    <p className="question__text">Cancellation four weeks prior = 100% refund</p>
                    <p className="question__text"> Cancellation two weeks prior = 50% refund</p>
                    <p className="question__text">  Cancellation later than two weeks = full payment</p>
                </div>




            </div>

        </section>
    );
};

export default Question;