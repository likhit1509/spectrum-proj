// ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Main/Home.css';

const ImageSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 300,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="slider-item">
          <div className="slider-content">
            <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
            <div className="overlay"></div>
            <div className="text-overlay">{slide.text}</div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
