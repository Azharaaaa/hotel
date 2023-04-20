import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import outside1 from "../../../assets/images/outside1.png"


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation, Pagination} from "swiper";

import {BsArrowRight,BsArrowLeft} from "react-icons/bs"

const Outside = () => {
    return (
        <section className="outside">
            <div className="container">
                <div className="outside__row">

                    <div className="outside__swiper">
                        <Swiper
                            pagination={{
                                type: "progressbar",
                            }}
                            navigation={{
                                nextEl:".outside-next",
                                prevEl:".outside-prev"
                            }}
                            loop={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="outside__card">
                                    <img src={outside1} alt="" className="outside__card-img"/>

                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="outside__card">
                                    <img src={outside1} alt="" className="outside__card-img"/>
                                </div>

                            </SwiperSlide>
                            <div className="outside__icons">
                                <icon className="outside-prev">
                                    <BsArrowLeft/>
                                </icon>
                                <icon className="outside-next">
                                    <BsArrowRight/>
                                </icon>
                            </div>


                        </Swiper>



                    </div>
                    <div className="outside__content">
                        <h2 className="outside__title">The Outside</h2>
                        <div className="outside__links">
                            <a href="#" className="outside__link">Hot tube</a>
                            <a href="#" className="outside__link">Electric car change</a>
                        </div>

                        <p className="outside__text">Løvtag’s three exclusive and comfortable cabins, Et, Ro and Ly, are designed by architect Sigurd Larsen. They all have an open space with a double bed, a double sofa bed, kitchen, separate toilet and an outdoor shower. On the roof, surrounded by treetops, there is a terrace, which is about nine meters above ground. </p>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default Outside;