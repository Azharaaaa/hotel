import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import  begin from "../../../assets/images/begin.png"
import {Link} from "react-router-dom"


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper";

import {BsArrowRight,BsArrowLeft} from "react-icons/bs"
import Booking from "../../Booking/Booking";

const Begin = () => {
    return (
        <section className='begin'>
            <div className="container">
                <Swiper
                    pagination={{
                        type: "progressbar",
                    }}
                    navigation={{
                        nextEl:".begin-next",
                        prevEl:".begin-prev"
                    }}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="begin__card">
                            <img src={begin} alt="" className="begin__card-img"/>
                            <h1 className="begin__title">Find peace in the Forest</h1>
                            <p className="begin__text">Come and stay in out hut hotel near Mariager Fjord in Denmark</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="begin__card">
                            <img src={begin} alt="" className="begin__card-img"/>
                            <h1 className="begin__title">Find peace in the Forest</h1>
                            <p className="begin__text">Come and stay in out hut hotel near Mariager Fjord in Denmark
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="begin__card">
                            <img src={begin} alt="" className="begin__card-img"/>
                            <h1 className="begin__title">Find peace in the Forest</h1>
                            <p className="begin__text">Come and stay in out hut hotel near Mariager Fjord in Denmark
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="begin__card">
                            <img src={begin} alt="" className="begin__card-img"/>
                            <h1 className="begin__title">Find peace in the Forest</h1>
                            <p className="begin__text">Come and stay in out hut hotel near Mariager Fjord in Denmark
                            </p>
                        </div>
                    </SwiperSlide>

                    <div className="begin__icons">
                        <icon className="begin-prev">
                            <BsArrowLeft/>
                        </icon>
                        <icon className="begin-next">
                            <BsArrowRight/>
                        </icon>
                    </div>




                </Swiper>
                <Link to={"/booking"}>
                    <div className="begin__btn">
                        <button  className="begin__btn-right">Book Now</button>
                        <p className="begin__btn-left">from
                            €3.200
                            <br/> per night</p>
                    </div>
                </Link>



            </div>
            
            
        </section>
    );
};

export default Begin;