import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { createContext, useState, useEffect } from "react";
const apiKey = import.meta.env.VITE_API_KEY;
const apiSecret = import.meta.env.VITE_API_SECRET;

import { Buffer } from "buffer";

//page
import Mainpage from "./pages/Mainpage";
import Footer from "./components/Footer";
import ImageViewer from "./pages/ImageViewer";

//make a Context
export const MyContext = createContext();

function App() {
  //---------
  //cloundniary
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/resources/image/tags/van", {
          headers: {
            Authorization: `Basic ${Buffer.from(
              apiKey + ":" + apiSecret
            ).toString("base64")}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          let dataNew = data.resources.map((image, index) => {
            return {
              ...image,
              id: index + 1,
            };
          });
          console.log(data.resources);
          setImages(dataNew);
        } else {
          console.error("Error fetching images:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, []);
  // console.log(images);

  //------------

  return (
    <div className="app">
      <MyContext.Provider value={{ images, setImages }}>
        <Routes>
          <Route exact path="/" element={<Mainpage />} />
          <Route path="/imageviewer" element={<ImageViewer />} />
        </Routes>
        <Footer />
      </MyContext.Provider>
    </div>
  );
}

export default App;
