import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '.././../../../assets/img1.jpg'
import img2 from '.././../../../assets/img2.jpg'
import img3 from '.././../../../assets/img3.jpg'
const Carosuel = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop interval={1000} dynamicHeight={false} className=''>
                <div>
                    <img src={img1} className='' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    );
};

export default Carosuel;