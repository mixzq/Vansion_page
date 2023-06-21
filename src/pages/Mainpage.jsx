import React, { useContext } from "react";
import { MyContext } from "../App";
import styled from "styled-components";
import ArtworksList from "../components/ArtworksList";

function Mainpage() {
  const { images } = useContext(MyContext);

  return (
    <Container>
      <div className="container">
        <div className="head">
          <div className="h-left">
            <div className="logo">
              <img src="./logo.png" alt="logo" />
            </div>

            <div className="info">
              <div className="generalInfo">
                <p>Illustrator</p>
                <p>Graphic</p>
                <p>Cartoon Artist</p>
              </div>

              <div className="contactInfo">
                <br />
                <p>Contact:vanjay316@gmail.com</p>
              </div>
            </div>
          </div>
          {/* <div className="h-right">
            <div className="category">
              <button className="Illustration">Illustration</button>
              <button className="Comic">Comic</button>
              <button className="Practices">Practices</button>
            </div>
          </div> */}
        </div>
        <div className="picturezone-bg"></div>

        <div className="pictureZone">
          <div className="picture">
            <ArtworksList artworks={images} />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Mainpage;
const Container = styled.div`
  .container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;

    .head {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: space-between;
      background-color: #f8f9f9;

      .h-left {
        width: 80vw;

        padding-top: 5vh;
        padding-left: 8vw;
        padding-bottom: 2vh;
        .logo {
          img {
            width: 20%;
          }
        }
        .info {
          width: 30vw;
          display: flex;

          flex-direction: column;

          .generalInfo {
            width: 70vw;
            display: flex;
            flex-direction: row;
            gap: 1vw;
            p {
              font-size: 0.7vw;
            }
          }
          .contactInfo {
            p {
              font-style: italic;
              font-size: 0.6vw;
            }
          }
        }
      }

      .h-right {
        display: flex;
        width: 10vw;
        flex-direction: column;
        justify-content: end;
        align-items: end;
        .category {
          display: flex;
          gap: 0.5vw;
          button {
            cursor: pointer;
            transition: transform 0.3s;
            font-size: 1vw;
            font-weight: 600;
            text-decoration: none;
            padding: 0.2vw 0.4vw;
            border: none;

            background-color: transparent;
          }
          button:hover {
            color: #272727;
            transform: scale(1.1);
          }
        }
      }
    }

    .pictureZone {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 100%;
      margin-top: 5vh;
      padding-top: 5vh;
      margin-bottom: 8vh;

      .picture {
        width: 90%;
      }
    }
    .image-viewer {
      width: 100%;
      height: 50vh;
      width: 50vw;
      object-fit: cover;
    }
  }
`;
