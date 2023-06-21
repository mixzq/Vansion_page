import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Artwork(props) {
  const passData = props;

  // console.log(passData);
  return (
    <ImageStyle>
      <Link to={"/imageViewer"} state={passData}>
        <div className="artwork">
          <img src={passData.imageUrl} alt={passData.title} id={passData.id} />
        </div>
      </Link>
    </ImageStyle>
  );
}

export default Artwork;

const ImageStyle = styled.div`
  .artwork {
    display: flex;
    // height for all the photos
    height: 35vh;
  }

  .artwork {
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
      transition: 0.5s ease;
      overflow: hidden;
      :hover {
        transform: scale(1.01);
      }
    }
  }
`;
