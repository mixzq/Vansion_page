import React, { useContext } from "react";
import styled from "styled-components";
import ImageSlider from "../components/ImageSlider";
import { MyContext } from "../App";
import { Link } from "react-router-dom";

function ImageViewer() {
  const { images } = useContext(MyContext);

  return (
    <SliderStyle>
      <div className="viwerPage">
        <Link className="backButton" to={"/"}>
          +
        </Link>

        <div className="image-viewer">
          <ImageSlider pics={images} />
        </div>
      </div>
    </SliderStyle>
  );
}

export default ImageViewer;
const SliderStyle = styled.div`
  .viwerPage {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: #212121;

    .image-viewer {
      padding-right: 2vh;
      width: 95%;
      height: auto;
    }
    .backButton {
      text-align: center;
      width: 2.5vh;
      height: 2.5vh;

      text-decoration: none;
      z-index: 5;
      font-size: 3vh;

      transform: rotate(45deg);

      position: relative;
      color: #ffffff;
      bottom: 40%;
      left: 90%;
    }
  }
  .slick-dots li button:before {
    color: #f4f4f4;
  }
  .data {
    color: white;
  }
`;
