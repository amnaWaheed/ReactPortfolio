import React, { useEffect, useRef } from "react";
import "./Intro.scss";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="image" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi,there I am</h2>
          <h1>Amna Waheed</h1>
          <h3>
            Mern stack <span>Developer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
