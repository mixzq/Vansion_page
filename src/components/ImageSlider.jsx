import React from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function ImageSlider({ pics }) {
  const images = pics;
  const { state } = useLocation();
  const sliderLocation = state.id - 1;

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: sliderLocation,
  };

  return (
    <SlideritemStyle>
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="slider-item">
            <img src={image.url} alt={image.public_id} />
          </div>
        ))}
      </Slider>
    </SlideritemStyle>
  );
}

export default ImageSlider;

const SlideritemStyle = styled.div`
  .slick-list {
    height: 85vh;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slider-item {
    object-fit: cover;
  }

  .slick-slide img {
    width: auto;
    max-width: 100%;
    height: 83vh;
    object-fit: cover;
  }
`;
