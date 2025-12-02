// src/components/ImageSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import { sliderImages } from '../assets/assets';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 1 second
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-6 px-4">
      <Slider {...settings}>
        {sliderImages.slice(0, 10).map((img, idx) => (
          <div key={idx} className="w-full h-[400px]">
            <img
              src={img}
              alt={`Slide ${idx}`}
              className="w-full h-full object-cover rounded-xl shadow-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
