import React from 'react';
import photo1 from "../../../assets/images/photo1.png"
import photo2 from "../../../assets/images/photo2.png"
import video from "../../../assets/images/video1.mp4"

const Photo = () => {
    return (
        <section className='photo'>
            <div className="container">
                <div className="photo__row">
                    <div className="photo__cards">
                        <img src={photo1} alt=""  className="photo__img"/>
                    </div>

                    <div className="photo__cards">

                        <video src={video} autoPlay controls width="432px" height="387px"></video>

                    </div>
                    <div className="photo__cards">
                        <img src={photo2} alt=""  className="photo__img"/>

                    </div>


                </div>

            </div>
            
        </section>
    );
};

export default Photo;