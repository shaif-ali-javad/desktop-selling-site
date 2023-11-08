import React from "react";
import HomeIcon from "./0.png"; // Import the image file
import "./home.css";

export const Home = () => {
  return (
    <div>
      <img src={HomeIcon} alt="Home" className="img" />
    </div>
  );
};

export default Home;
